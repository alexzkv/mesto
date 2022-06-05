export const cardObject = [
  {
    name: 'Москва-Сити',
    link: 'https://ia.wampi.ru/2022/04/14/moscow-city.jpg'
  },
  {
    name: 'Демерджи-яйла',
    link: 'https://ia.wampi.ru/2022/04/14/demerdzhi-yayla.jpg'
  },
  {
    name: 'Тиб',
    link: 'https://ie.wampi.ru/2022/04/14/tib.jpg'
  },
  {
    name: 'Коломенский дворец',
    link: 'https://ie.wampi.ru/2022/04/14/kolomna-palace.jpg'
  },
  {
    name: 'Фиолент',
    link: 'https://ie.wampi.ru/2022/04/14/fiolent.jpg'
  },
  {
    name: 'Кезенойам',
    link: 'https://ia.wampi.ru/2022/04/14/kezenoyam.jpg'
  }
];

export const popupEditProfile = document.querySelector('.popup_profile');
export const btnEditProfile = document.querySelector('.profile__edit-button');
export const formEditProfile = document.querySelector('.popup__form');
// export const closingPopupProfile = popupProfile.querySelector('.popup__close');
// export const inputNameProfile = popupProfile.querySelector('.popup__input_profile_name');
// export const inputAboutProfile = popupProfile.querySelector('.popup__input_profile_about');
export const profileName = document.querySelector('.profile__info-title');
export const profileAbout = document.querySelector('.profile__info-subtitle');

export const popupAddCard = document.querySelector('.popup_add-card');
export const btnAddCard = document.querySelector('.profile__add-card');
export const formEditCard = document.querySelector('.popup__form');
export const cardListSelector = '.element-grid';
export const listContainer = document.querySelector('.element-grid');
// export const nameInputCard = document.querySelector('.popup__input_card_name');
// export const linkInputCard = document.querySelector('.popup__input_card_link');

export const popupOpenCard = document.querySelector('.popup_open-card');
// export const cardBigImage = popupOpenCard.querySelector('.popup__image');
// export const cardBigTitle = popupOpenCard.querySelector('.popup__image-title');
export const cardTemplate = document.querySelector('.card-template');

export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
