//переменные для профиля
const popupProfile = document.querySelector('.popup_profile');
const btnEditProfile = document.querySelector('.profile__edit-button');
const formEditProfile = popupProfile.querySelector('.popup__form');
const closingPopupProfile = popupProfile.querySelector('.popup__close');
const inputNameProfile = popupProfile.querySelector('.popup__input_profile_name');
const inputAboutProfile = popupProfile.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__info-title');
const profileAbout = document.querySelector('.profile__info-subtitle');
//переменные для карточек
const popupAddCard = document.querySelector('.popup_add-card');
const btnAddCard = document.querySelector('.profile__add-card');
const formEditCard = popupAddCard.querySelector('.popup__form');
const closingPopupCard = popupAddCard.querySelector('.popup__close');
const listContainer = document.querySelector('.element-grid');
const cardTemplate = document.querySelector('.card-template');
const nameInputCard = document.querySelector('.popup__input_card_name');
const linkInputCard = document.querySelector('.popup__input_card_link');
//переменные для большой карточки
const popupOpenCard = document.querySelector('.popup_open-card');
const cardBig = popupOpenCard.querySelector('.popup__image');
const cardBigTitle = popupOpenCard.querySelector('.popup__image-title');
const closingPopupBigCard = popupOpenCard.querySelector('.popup__close');
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
  if (evt.target) {
    const popupOpened = document.querySelector('.popup_opened');
    closeModalWindow(evt.target);
  }
}
//функция кнопки открытия формы для добавления карточки
btnAddCard.addEventListener('click', () => {
  const submitBtn = popupAddCard.querySelector('.popup__save-button');
  disableSubmitButton(submitBtn, config.inactiveButtonClass);
  clearError(popupAddCard, config, disableSubmitButton);
  openModalWindow(popupAddCard);
});
// функция отрисовки элементов
function render() {
  const drawingElements = cardObject.map(getElement);
  listContainer.append(...drawingElements);
}
//функция наполнения содержимым
function getElement(item) {
  const elementTemplate = cardTemplate.content.cloneNode(true);
  const link = elementTemplate.querySelector('.card__img');
  const name = elementTemplate.querySelector('.card__title');
  const btnRemove = elementTemplate.querySelector('.card__trash');
  const btnCardLike = elementTemplate.querySelector('.card__like');
  link.src = item.link;
  link.alt = item.name;
  name.textContent = item.name;
  btnRemove.addEventListener('click', removeCard);
  btnCardLike.addEventListener('click', () => {
    btnCardLike.classList.toggle('card__like_active')
  });
  link.addEventListener('click', () => {
    cardBig.src = link.src;
    cardBig.alt = link.alt;
    cardBigTitle.textContent = name.textContent;
    openModalWindow(popupOpenCard);
  });
  return elementTemplate;
}
//функция добавления карточки
function addCard(evt) {
  const cardElement = getElement({name: nameInputCard.value, link: linkInputCard.value});
  listContainer.prepend(cardElement);
  formEditCard.reset();
}
//функция сохранения данных при добавлении карточки
formEditCard.addEventListener('submit', evt => {
  evt.preventDefault();
  closeModalWindow(popupAddCard);
  addCard();
});
//функция кнопки закрытия формы добавления карточки
closingPopupCard.addEventListener('click', () => {
  closeModalWindow(popupAddCard);
});
//функция удаления карточки
function removeCard(evt) {
  const cardElement = evt.target.closest('.card');
  cardElement.remove();
 }
 //функция кнопки открытия редактирования профиля
 btnEditProfile.addEventListener('click', () => {
  inputNameProfile.value = `${profileName.textContent}`;
  inputAboutProfile.value = `${profileAbout.textContent}`;
  clearError(popupProfile, config, disableSubmitButton);
  openModalWindow(popupProfile);
});
 //функция кнопки закрытия редактирования профиля
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
 //функция кнопки закрытия большой карточки
 closingPopupBigCard.addEventListener('click', () => {
  closeModalWindow(popupOpenCard);
});
render();
