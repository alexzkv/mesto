export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  }
  //функция появления ошибки
  _showInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }
  //функция скрытия ошибки
  _hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  }
  //функция проверки валидности
  _checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
    } else {
      this._hideInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
    }
  }
  //функция добавления слушателей событий форме и её полям
  _setEventListeners = (formElement, config) => {
    //const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, config);
        this._toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
      });
    });
  }
  //функция валидации
  enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement, this._config);
  });
}
  //функция проверки невалидных полей
  _hasInvalidInput = () => {
    return Array.from(inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //функция переключения кнопки
  _toggleButtonState = (buttonElement, inactiveButtonClass) => {
    if(this._hasInvalidInput()) {
      this.disableSubmitButton(buttonElement, inactiveButtonClass);
    } else {
      this.enableSubmitButton(buttonElement, inactiveButtonClass);
    }
  }
  //функция включения блокированной кнопки
  disableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', "");
  }
  //функция отключения блокированной кнопки
  enableSubmitButton = (buttonElement, inactiveButtonClass) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', "");
  }
  //функция очистки валидации
  clearError = (popup, config, disableSubmitButton) => {
    const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
    const formElement = popup.querySelector(config.formSelector);
    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement, config.inputErrorClass, config.errorClass);
    });
  }
}
