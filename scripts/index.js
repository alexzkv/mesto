//переменные для профиля
const popupProfile = document.querySelector('.popup_profile');
const editProfileBtn = document.querySelector('.profile__edit-button');
const editNameInfo = document.querySelector('.popup__form-profile');
const closePopupProfile = popupProfile.querySelector('.popup__close');
const nameInputProfile = document.querySelector('.popup__input_profile_name');
const aboutInputProfile = document.querySelector('.popup__input_profile_about');
const profileName = document.querySelector('.profile__info-title');
const profileAbout = document.querySelector('.profile__info-subtitle');

//переменные для карточек
const popupAddCard = document.querySelector('.popup_add-card');
const addCardBtn = document.querySelector('.profile__add-card');
const editNameCard = document.querySelector('.popup__form-card');
const closePopupCard = popupAddCard.querySelector('.popup__close');


const listContainer = document.querySelector('.element-grid');
const cardTemplate = document.querySelector('.card-template');
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
  popup.classList.add('popup_opened'); {
  }
}

// функция закрытия popup
function closeModalWindow(popup) {
  popup.classList.remove('popup_opened'); {
  }
}

// функция отрисовки элементов template
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

  likeCardBtn.addEventListener('click', function() {
    likeCardBtn.classList.toggle('card__like_active')
  });

  return getElemenTemplate;
}

//функкция кнопки открытия формы для добавления карточки
addCardBtn.addEventListener('click', () => {
  openModalWindow(popupAddCard);
});

//функция добавления карточки
function addCard(evt) {
  const nameInputCard = document.querySelector('.popup__input_card_name');
  const linkInputCard = document.querySelector('.popup__input_card_link');
  const cardElement = getElement({name: nameInputCard.value, link: linkInputCard.value});
  listContainer.prepend(cardElement);

  nameInputCard.value = '';
  linkInputCard.value = '';
}

//функкция сохранения данных добавления карточки
editNameCard.addEventListener('submit', evt => {
  evt.preventDefault();

  closeModalWindow(popupAddCard);

  addCard();
});


//функкция кнопки закрытия формы для добавления карточки
closePopupCard.addEventListener('click', () => {
  closeModalWindow(popupAddCard);
});

//функция удаления карточки
function removeCard(evt) {
  const cardElement = evt.target.closest('.card');
  cardElement.remove();
 }

 //функкция кнопки открытия редактирования профиля
editProfileBtn.addEventListener('click', () => {
  nameInputProfile.value = `${profileName.textContent}`;
  aboutInputProfile.value = `${profileAbout.textContent}`;

  openModalWindow(popupProfile);
});

 //функкция кнопки закрытия редактирования профиля
closePopupProfile.addEventListener('click', () => {
  closeModalWindow(popupProfile);
});

//функкция сохранения данных редактирования профиля
editNameInfo.addEventListener('submit', evt => {
  evt.preventDefault();

  profileName.textContent = nameInputProfile.value;
  profileAbout.textContent = aboutInputProfile.value;

  closeModalWindow(popupProfile);
});

render();
