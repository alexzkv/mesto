import './styles/index.css';
import { Card } from './scripts/Card';
import { FormValidator } from './scripts/FormValidator';

const popupProfile = document.querySelector('.popup_profile');
const btnEditProfile = document.querySelector('.profile__edit-button');
const formEditProfile = popupProfile.querySelector('.popup__form');
const closingPopupProfile = popupProfile.querySelector('.popup__close');
const inputNameProfile = popupProfile.querySelector('.popup__input_profile_name');
const inputAboutProfile = popupProfile.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__info-title');
const profileAbout = document.querySelector('.profile__info-subtitle');

const popupAddCard = document.querySelector('.popup_add-card');
const btnAddCard = document.querySelector('.profile__add-card');
const formEditCard = popupAddCard.querySelector('.popup__form');
const listContainer = document.querySelector('.element-grid');
const nameInputCard = document.querySelector('.popup__input_card_name');
const linkInputCard = document.querySelector('.popup__input_card_link');

const popupOpenCard = document.querySelector('.popup_open-card');
const cardBigImage = popupOpenCard.querySelector('.popup__image');
const cardBigTitle = popupOpenCard.querySelector('.popup__image-title');

const config = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

const cardFormValidator = new FormValidator(config, formEditCard);
const profileFormValidator = new FormValidator(config, formEditProfile);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

const cardObject = [
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

//функция открытия popup
function openModalWindow(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeByOverlay);
  document.addEventListener('keydown', closeByEsc);
}

// функция закрытия popup
function closeModalWindow(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closeByOverlay);
  document.removeEventListener('keydown', closeByEsc);
}

//функция закрытия на esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closeModalWindow(popupOpened);
  }
}

//функция закрытия на overlay
function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(evt.currentTarget)
  }
}

//функция клика по карточке
function handlePhotoClick (item) {
  cardBigImage.src = item.link;
  cardBigImage.alt = item.name;
  cardBigTitle.textContent = item.name;
  openModalWindow(popupOpenCard);
}

//функция создания новой карточки
function createCard(item) {
  const card = new Card(item, '.card-template', handlePhotoClick);
  const cardElement = card.generateCard();
  return cardElement;
}

//функция добавления карточек на страницу
cardObject.forEach((item) => {
  listContainer.append(createCard(item));
});

//функция открытия формы для добавления карточки
btnAddCard.addEventListener('click', () => {
  cardFormValidator.disableSubmitButton();
  cardFormValidator.clearError();
  openModalWindow(popupAddCard);
});

//функция сохранения данных при добавлении карточки
formEditCard.addEventListener('submit', evt => {
  evt.preventDefault();
  listContainer.prepend(createCard({name: nameInputCard.value, link: linkInputCard.value}));
  formEditCard.reset();
  closeModalWindow(popupAddCard);
});

 //функция открытия формы редактирования профиля
 btnEditProfile.addEventListener('click', () => {
  inputNameProfile.value = `${profileName.textContent}`;
  inputAboutProfile.value = `${profileAbout.textContent}`;
  profileFormValidator.clearError();
  openModalWindow(popupProfile);
});

 //функция закрытия формы редактирования профиля
closingPopupProfile.addEventListener('click', () => {
  closeModalWindow(popupProfile);
});

//функция сохранения данных редактирования профиля
formEditProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = inputNameProfile.value;
  profileAbout.textContent = inputAboutProfile.value;
  closeModalWindow(popupProfile);
});
