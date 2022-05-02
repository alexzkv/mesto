const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  inactiveButtonClass: 'popup__save-button_disabled',
}

const showInputError = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
}

const hideInputError = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = document.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, config.inputErrorClass, config.errorClass);
  } else {
    hideInputError(inputElement, config.inputErrorClass, config.errorClass);
  }
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      // toggleButton(formElement, config, inputList);
    });
  });
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// const toggleButton = (formElement, config) => {
//   const button = document.querySelector(config.submitButtonSelector);
//   button.disabled = !formElement.checkInputValidity();
//   button.classList.toggle(inactiveButtonClass, !formElement.checkInputValidity());
// }

const removeError = (popup, config) => {
  const inputsModal = Array.from(popup.querySelectorAll(config.inputSelector));
  inputsModal.forEach((inputElement) => {
  hideInputError(inputElement, config.inputErrorClass, config.errorClass);
  });
}

// const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
//   if(hasInvalidInput(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.setAttribute("disabled", "");
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute("disabled", "");
//   }
// }

enableValidation(config);



// function enableValidation(config) {
//   const formElement = document.querySelector(config.formSelector);
//   const inputElement = formElement.querySelectorAll(config.inputSelector);
//   inputElement.forEach((element) => {
//     element.addEventListener('input', (evt) => handleFormInput(evt, formElement, config));
//   });
//   formElement.addEventListener('submit', (evt) => handleFormSubmit(evt, formElement));
//   toggleBtn(formElement, config);
// }

// function toggleBtn(formElement, config) {
//   const btnSave = document.querySelector(config.submitButtonSelector);
//   btnSave.disabled = !formElement.checkValidity();
//   btnSave.classList.toggle(config.inactiveButtonClass, !formElement.checkValidity());

// }

// function handleFormSubmit(evt, formElement) {
//   evt.preventDefault();
// }

// function handleFormInput(evt, formElement, config) {
//   const input = evt.target;
//   const errorNode = document.querySelector(`#${input.id}-error`);
//   if (input.validity.valid) {
//     errorNode.textContent = '';
//   } else {
//     errorNode.textContent = input.validationMessage;
//   }
//   toggleBtn(formElement, config);
// }

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__save-button',
//   inactiveButtonClass: 'popup__save-button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

