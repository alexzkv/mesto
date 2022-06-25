const popupEditProfile = document.querySelector('.popup_profile');
export const popupProfileSelector = '.popup_profile';
export const profileNameSelector = '.profile__info-title';
export const profileAboutSelector = '.profile__info-subtitle';
export const btnEditProfile = document.querySelector('.profile__edit-button');
export const formEditProfile = popupEditProfile.querySelector('.popup__form');
export const inputNameProfile = document.querySelector('.popup__input_profile_name');
export const inputAboutProfile = document.querySelector('.popup__input_profile_about');

const popupUpdateAvatar = document.querySelector('.popup_update-avatar');
export const popupAvatarSelector = '.popup_update-avatar';
export const profileAvatarSelector = '.profile__avatar';
export const btnUpdateAvatar = document.querySelector('.profile__avatar');
export const formUpdateAvatar = popupUpdateAvatar.querySelector('.popup__form');

const popupAddCard = document.querySelector('.popup_add-card');
export const cardListSelector = '.element-grid';
export const popupAddCardSelector = '.popup_add-card';
export const cardTemplateSelector = '.card-template';
export const popupOpenCardSelector = '.popup_open-card';
export const btnAddCard = document.querySelector('.profile__add-card');
export const formAddCard = popupAddCard.querySelector('.popup__form');

export const popupConfirmSelector = '.popup_confirm';

export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
