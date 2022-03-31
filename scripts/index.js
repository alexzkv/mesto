let editProfileBtn = document.querySelector('.profile__edit-button');
let modalWindow = document.querySelector('.popup');
let modalCloseBtn = modalWindow.querySelector('.popup__close');
let editNameInfo = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let aboutInput = document.querySelector('.popup__input_about');
let profileName = document.querySelector('.profile__info-title');
let profileAbout = document.querySelector('.profile__info-subtitle');

function openModalWindow() {
  modalWindow.classList.add('popup_opened');

  nameInput.value = `${profileName.textContent}`;
  aboutInput.value = `${profileAbout.textContent}`;
}

function closeModalWindow() {
  modalWindow.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeModalWindow();
}

editNameInfo.addEventListener('submit', formSubmitHandler);

editProfileBtn.addEventListener('click', openModalWindow);

modalCloseBtn.addEventListener('click', function () {
  modalWindow.classList.remove('popup_opened');
});


