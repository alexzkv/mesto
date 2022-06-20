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
  // profileName,
  // profileAbout,
  inputNameProfile,
  inputAboutProfile,
  popupAddCardSelector,
  popupOpenCardSelector,
  cardTemplateSelector,
  formAddCard,
  btnAddCard,
  // btnDeleteCard,
  // popupConfirmSelector,
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

api.getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  })

let сardList;

api.getCards()
  .then((items) => {
    сardList = new Section({
      cards: items,
      renderer: (item) => {
        const card = createCard(item);
        сardList.addItem(card);
      }
    },
    cardListSelector);
    сardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const createCard = (item) => {
  const card = new Card(
    item,
    cardTemplateSelector,
    handleCardClick,
    // handleDeleteBtnClick: (card) => {
    //   popupConfirm.open();
    //   popupConfirm.setSubmitAction(() => {
    //     api.deleteCard(card.id).then(() => {
    //       card.deleteCard();
    //     });
    //   });
    // }
  );
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
      .catch((err) =>
      console.log(err));
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
      .catch((err) =>
      console.log(err));
  }
});

// const popupConfirm = new PopupWithConfirm(popupConfirmSelector);

const popupCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (data) => {
    popupCard.isSaving();
    api.addCard({ name: data['item-name'], link: data['item-link'] })
      .then((res) => {
        const card = createCard(res);
        сardList.addItem(card);
        popupCard.close();
      })
      .catch((err) =>
      console.log(err));
  }
});

const popupBigCard = new PopupWithImage(popupOpenCardSelector);

function handleCardClick(item) {
  popupBigCard.open(item);
}

const userInfo = new UserInfo(profileNameSelector, profileAboutSelector, profileAvatarSelector);

btnUpdateAvatar.addEventListener('click', () => {
  avatarFormValidator.disableSubmitButton();
  avatarFormValidator.clearError();
  popupUpdateAvatar.open();
});

btnEditProfile.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  inputNameProfile.value = name;
  inputAboutProfile.value = about;
  profileFormValidator.clearError();
  popupProfile.open();
});

btnAddCard.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  cardFormValidator.clearError();
  popupCard.open();
});

// btnDeleteCard.addEventListener('click', () => {

//   popupConfirm.open();
// });

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();
popupProfile.setEventListeners();
popupCard.setEventListeners();
// popupConfirm.setEventListeners();
popupBigCard.setEventListeners();
popupUpdateAvatar.setEventListeners();


  // function deleteCardHandler(cardId) {
  //   api.deleteCard(cardId)
  //     .then(() => {

  //     })
  // }


