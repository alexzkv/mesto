import '../styles/index.css';

import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import { cardObject,
  cardListSelector,
  listContainer,
  config,
  // popupEditProfile,
  // popupAddCard,
  // popupOpenCard,
  profileName,
  profileAbout,

  // cardTemplate,
  formEditCard,
  btnAddCard,
  formEditProfile,
  btnEditProfile
 } from '../utils/constants';

const cardFormValidator = new FormValidator(config, formEditCard);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(config, formEditProfile);
profileFormValidator.enableValidation();

const userInfo = new UserInfo({ profileName, profileAbout });

const popupProfile = new PopupWithForm('.popup_profile', { submitForm: (data) => {
  userInfo.setUserInfo(data);
}});

const popupCard = new PopupWithForm('.popup_add-card', { submitForm: (data) => {
  const inputList = { name: data.placeName, link: placeLink }
  const card = createCard(inputList);
    сardList.addItem(data);
}});

// //создание новой карточки
const createCard = (item) => {
  const card = new Card(item, '.card-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const сardList = new Section({
  items: cardObject,
  renderer: (item) => {
    const card = createCard(item);
    сardList.addItem(card);
  }
},
cardListSelector);

//сохранение данных при добавлении карточки
formEditCard.addEventListener('submit', evt => {
  evt.preventDefault();
  formEditCard.reset();
  popupCard.open();
});

const popupBigCard = new PopupWithImage('.popup_open-card');

 //функция открытия формы редактирования профиля
 btnEditProfile.addEventListener('click', () => {
  profileFormValidator.clearError();
  popupProfile.open(userInfo.getUserInfo());
});

function submitForm(formValues) {
  userInfo.setUserInfo(formValues);
}

//функция открытия формы для добавления карточки
btnAddCard.addEventListener('click', (evt) => {
  cardFormValidator.disableSubmitButton();
  cardFormValidator.clearError();
  popupCard.open();
});

//функция клика по карточке
function handleCardClick(item) {
  popupBigCard.open(item);
}










// // функция сохранения данных редактирования профиля
// formEditProfile.addEventListener('submit', evt => {
//   evt.preventDefault();
//   popupProfile.close();
// });




сardList.renderItems();









//  //функция закрытия формы редактирования профиля
// closingPopupProfile.addEventListener('click', () => {
//   closeModalWindow(popupProfile);
// });

// //функция открытия popup
// function openModalWindow(popup) {
//   popup.classList.add('popup_opened');
//   popup.addEventListener('mousedown', closeByOverlay);
//   document.addEventListener('keydown', closeByEsc);
// }

// // функция закрытия popup
// function closeModalWindow(popup) {
//   popup.classList.remove('popup_opened');
//   popup.removeEventListener('mousedown', closeByOverlay);
//   document.removeEventListener('keydown', closeByEsc);
// }

// //функция закрытия на esc
// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closeModalWindow(popupOpened);
//   }
// }

// //функция закрытия на overlay
// function closeByOverlay(evt) {
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
//     closeModalWindow(evt.currentTarget)
//   }
// }
