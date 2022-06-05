import '../pages/index.css';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import {
  popupProfileSelector,
  formEditProfile,
  btnEditProfile,
  profileNameSelector,
  profileAboutSelector,
  inputNameProfile,
  inputAboutProfile,
  popupAddCardSelector,
  popupOpenCardSelector,
  cardTemplateSelector,
  formAddCard,
  btnAddCard,
  config,
  cardObject,
  cardListSelector
 } from '../utils/constants';

const cardFormValidator = new FormValidator(config, formAddCard);
const profileFormValidator = new FormValidator(config, formEditProfile);

const popupProfile = new PopupWithForm(popupProfileSelector, {
  submitForm: (data) => {
    userInfo.setUserInfo(data);
    popupProfile.close();
  }
});

const popupCard = new PopupWithForm(popupAddCardSelector, {
  submitForm: (data) => {
    const inputList = { name: data['item-name'], link: data['item-link'] };
    const card = createCard(inputList);
    сardList.addItem(card);
    popupCard.close();
  }
});

const popupBigCard = new PopupWithImage(popupOpenCardSelector);

const createCard = (item) => {
  const card = new Card(item, cardTemplateSelector, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleCardClick(item) {
  popupBigCard.open(item);
}

const сardList = new Section({
  items: cardObject,
  renderer: (item) => {
    const card = createCard(item);
    сardList.addItem(card);
  }
},
cardListSelector);

сardList.renderItems();

const userInfo = new UserInfo({ profileNameSelector, profileAboutSelector });

btnEditProfile.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  inputNameProfile.value = name;
  inputAboutProfile.value = about;
  profileFormValidator.clearError();
  popupProfile.open();
});

btnAddCard.addEventListener('click', (evt) => {
  cardFormValidator.disableSubmitButton();
  cardFormValidator.clearError();
  popupCard.open();
});

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupBigCard.setEventListeners();
