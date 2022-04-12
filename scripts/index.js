const editProfileBtn = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modalCloseBtn = modalWindow.querySelector('.popup__close');
const editNameInfo = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_text_name');
const aboutInput = document.querySelector('.popup__input_text_about');
const profileName = document.querySelector('.profile__info-title');
const profileAbout = document.querySelector('.profile__info-subtitle');
const listContainer = document.querySelector('.element-grid');
const cardTemplate = document.querySelector('.card-template');
const initialCards = [
  {
    name: 'Москва-Сити',
    link: 'https://images.pexels.com/photos/11676075/pexels-photo-11676075.jpeg?cs=srgb&dl=pexels-vladislav-serov-11676075.jpg&fm=jpg'
  },
  {
    name: 'Демерджи-яйла',
    link: 'https://images.pexels.com/photos/11678557/pexels-photo-11678557.jpeg?cs=srgb&dl=pexels-tanya-kashtanova-11678557.jpg&fm=jpg'
  },
  {
    name: 'Тиб',
    link: 'https://images.pexels.com/photos/5652604/pexels-photo-5652604.jpeg?cs=srgb&dl=pexels-julia-volk-5652604.jpg&fm=jpg'
  },
  {
    name: 'Коломенский дворец',
    link: 'https://images.pexels.com/photos/2383860/pexels-photo-2383860.jpeg?cs=srgb&dl=pexels-artem-beliaikin-2383860.jpg&fm=jpg'
  },
  {
    name: 'Фиолент',
    link: 'https://images.pexels.com/photos/8720843/pexels-photo-8720843.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8720843.jpg&fm=jpg'
  },
  {
    name: 'Кезенойам',
    link: 'https://images.pexels.com/photos/3055497/pexels-photo-3055497.jpeg?cs=srgb&dl=pexels-boris-ulzibat-3055497.jpg&fm=jpg'
  }
];

// функция отрисовки элементов template
function render() {
  const drawingElements = initialCards.map(getElement);
  listContainer.append(...drawingElements);
}

//функция наполнения содержим
function getElement(item) {
  const getElemenTemplate = cardTemplate.content.cloneNode(true);
  const link = getElemenTemplate.querySelector('.card__img');
  link.src = item.link;
  link.alt = item.name;
  const name = getElemenTemplate.querySelector('.card__title');
  name.textContent = item.name;

  return getElemenTemplate;
}

render();

//функция открытия popup
function openModalWindow() {
  modalWindow.classList.add('popup_opened'); {

  nameInput.value = `${profileName.textContent}`;
  aboutInput.value = `${profileAbout.textContent}`;
  }
}

// функция закрытия popup
function closeModalWindow() {
  modalWindow.classList.remove('popup_opened'); {
  }
}

//функция сохранения информации
function saveProfile (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeModalWindow();
}

editNameInfo.addEventListener('submit', saveProfile);

editProfileBtn.addEventListener('click', openModalWindow);

modalCloseBtn.addEventListener('click', closeModalWindow);
