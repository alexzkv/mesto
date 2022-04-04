let editProfileBtn = document.querySelector('.profile__edit-button');
let modalWindow = document.querySelector('.popup');
let modalCloseBtn = modalWindow.querySelector('.popup__close');
let editNameInfo = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_text_name');
let aboutInput = document.querySelector('.popup__input_text_about');
let profileName = document.querySelector('.profile__info-title');
let profileAbout = document.querySelector('.profile__info-subtitle');

//функция открытия popup
function openModalWindow() {
  if (modalWindow.classList.add('popup_opened')); {

  nameInput.value = `${profileName.textContent}`;
  aboutInput.value = `${profileAbout.textContent}`;
  }
}

// функция закрытия popup
function closeModalWindow() {
  if (modalWindow.classList.remove('popup_opened')); {
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
