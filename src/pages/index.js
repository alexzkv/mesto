import '../pages/index.css';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api';
import {
  popupProfileSelector,
  formEditProfile,
  btnEditProfile,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  inputNameProfile,
  inputAboutProfile,
  popupAddCardSelector,
  popupOpenCardSelector,
  cardTemplateSelector,
  formAddCard,
  btnAddCard,
  popupConfirmSelector,
  btnUpdateAvatar,
  popupAvatarSelector,
  formUpdateAvatar,
  config,
  cardListSelector
 } from '../utils/constants';

const api = new Api(
  'https://mesto.nomoreparties.co/v1/cohort-43/',
  'db177002-d58e-42cc-a0cb-65827554d6b2'
);

const cardFormValidator = new FormValidator(config, formAddCard);
const profileFormValidator = new FormValidator(config, formEditProfile);
const avatarFormValidator = new FormValidator(config, formUpdateAvatar);
const userInfo = new UserInfo(profileNameSelector, profileAboutSelector, profileAvatarSelector);
const popupConfirm = new PopupWithConfirm(popupConfirmSelector);
const popupBigCard = new PopupWithImage(popupOpenCardSelector);

let userId = null;

api.getUserInfo()
  .then((userData) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
  })
  .catch((err) => console.log(err));

let сardList;

api.getCards()
  .then((items) => {
    сardList = new Section({
      cards: items,
      renderer: (data) => {
        const card = createCard(data);
        сardList.addItem(card);
      }
    },
    cardListSelector);
    сardList.renderItems();
  })
  .catch((err) => console.log(err));

const createCard = (data) => {
  const card = new Card(data, userId, cardTemplateSelector,
  {
    handleCardClick: () => { popupBigCard.open(data) },
    handleDeleteBtnClick: (_id) => {
      popupConfirm.open();
      popupConfirm.setSubmitAction(() => {
        api.deleteCard(_id)
          .then(() => {
            card.handleDeleteCard();
            popupConfirm.close();
          })
          .catch((err) => console.log(err));
      })
    },
    handleLikeBtnClick: (data) => {
      api.likeCard(data._id)
        .then((res) => {
          card.handleLikeCard(res)
        })
        .catch((err) => console.log(err));
    },
    handleDislikeBtnClick: (data) => {
      api.dislikeCard(data._id)
        .then((res) => {
          card.handleDislikeCard(res)
        })
        .catch((err) => console.log(err));
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitForm: (data) => {
    popupProfile.isSaving();
    api.updateInfo({ name: data['profile-name'], about: data['profile-about'] })
      .then((res) => {
        userInfo.setUserInfo(res);
        popupProfile.close();
      })
      .catch((err) => console.log(err));
  }
});

const popupUpdateAvatar = new PopupWithForm(popupAvatarSelector, {
  submitForm: (data) => {
    popupUpdateAvatar.isSaving();
    api.updateAvatar(data['avatar-name'])
      .then((res) => {
        userInfo.setUserInfo(res);
        popupUpdateAvatar.close();
      })
      .catch((err) => console.log(err));
  }
});

const popupCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (data) => {
    popupCard.isSaving();
    api.addCard({ name: data['item-name'], link: data['item-link'] })
      .then((data) => {
        const card = createCard(data);
        сardList.addItem(card);
        popupCard.close();
      })
      .catch((err) => console.log(err));
  }
});

btnEditProfile.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  inputNameProfile.value = name;
  inputAboutProfile.value = about;
  profileFormValidator.clearError();
  popupProfile.open();
});

btnUpdateAvatar.addEventListener('click', () => {
  avatarFormValidator.disableSubmitButton();
  avatarFormValidator.clearError();
  popupUpdateAvatar.open();
});

btnAddCard.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  cardFormValidator.clearError();
  popupCard.open();
});

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupConfirm.setEventListeners();
popupBigCard.setEventListeners();
popupUpdateAvatar.setEventListeners();
