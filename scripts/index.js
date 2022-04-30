//переменные для профиля
const popupProfile = document.querySelector('.popup_profile');
const btnEditProfile = document.querySelector('.profile__edit-button');
const formEditProfile = popupProfile.querySelector('.popup__form');
const closePopupProfile = popupProfile.querySelector('.popup__close');
const nameInputProfile = popupProfile.querySelector('.popup__input_profile_name');
const aboutInputProfile = popupProfile.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__info-title');
const profileAbout = document.querySelector('.profile__info-subtitle');

//переменные для карточек
const popupAddCard = document.querySelector('.popup_add-card');
const btnAddCard = document.querySelector('.profile__add-card');
const formEditCard = popupAddCard.querySelector('.popup__form');
const closePopupCard = popupAddCard.querySelector('.popup__close');
const listContainer = document.querySelector('.element-grid');
const cardTemplate = document.querySelector('.card-template');
const nameInputCard = document.querySelector('.popup__input_card_name');
const linkInputCard = document.querySelector('.popup__input_card_link');

//переменные для большой карточки
const popupOpenCard = document.querySelector('.popup_open-card');
const bigCard = popupOpenCard.querySelector('.popup__image');
const bigCardTitle = popupOpenCard.querySelector('.popup__image-title');
const closePopupBigCard = popupOpenCard.querySelector('.popup__close');

const initialCards = [
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
}

// функция закрытия popup
function closeModalWindow(popup) {
  popup.classList.remove('popup_opened');
}

//функция кнопки открытия формы для добавления карточки
btnAddCard.addEventListener('click', () => {
  openModalWindow(popupAddCard);
});

// функция отрисовки элементов
function render() {
  const drawingElements = initialCards.map(getElement);
  listContainer.append(...drawingElements);
}

//функция наполнения содержимым
function getElement(item) {
  const getElemenTemplate = cardTemplate.content.cloneNode(true);
  const link = getElemenTemplate.querySelector('.card__img');
  const name = getElemenTemplate.querySelector('.card__title');
  const removeButton = getElemenTemplate.querySelector('.card__trash');
  const likeCardBtn = getElemenTemplate.querySelector('.card__like');
  link.src = item.link;
  link.alt = item.name;
  name.textContent = item.name;
  removeButton.addEventListener('click', removeCard);
  likeCardBtn.addEventListener('click', () => {
    likeCardBtn.classList.toggle('card__like_active')
  });
  link.addEventListener('click', () => {
    bigCard.src = link.src;
    bigCard.alt = link.alt;
    bigCardTitle.textContent = name.textContent;
    openModalWindow(popupOpenCard);
  });
  return getElemenTemplate;
}

//функция добавления карточки
function addCard(evt) {
  const cardElement = getElement({name: nameInputCard.value, link: linkInputCard.value});
  listContainer.prepend(cardElement);
  formEditCard.reset();
}

//функкция сохранения данных при добавлении карточки
formEditCard.addEventListener('submit', evt => {
  evt.preventDefault();
  closeModalWindow(popupAddCard);
  addCard();
});

//функция кнопки закрытия формы добавления карточки
closePopupCard.addEventListener('click', () => {
  closeModalWindow(popupAddCard);
});

//функция удаления карточки
function removeCard(evt) {
  const cardElement = evt.target.closest('.card');
  cardElement.remove();
 }

 //функкция кнопки открытия редактирования профиля
 btnEditProfile.addEventListener('click', () => {
  nameInputProfile.value = `${profileName.textContent}`;
  aboutInputProfile.value = `${profileAbout.textContent}`;
  openModalWindow(popupProfile);
});

 //функкция кнопки закрытия редактирования профиля
closePopupProfile.addEventListener('click', () => {
  closeModalWindow(popupProfile);
});

//функкция сохранения данных редактирования профиля
formEditProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = nameInputProfile.value;
  profileAbout.textContent = aboutInputProfile.value;
  closeModalWindow(popupProfile);
});

 //функкция кнопки закрытия большой карточки
 closePopupBigCard.addEventListener('click', () => {
  closeModalWindow(popupOpenCard);
});

render();
