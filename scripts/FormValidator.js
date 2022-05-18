export class FormValidator {
  _config
  _formElement
  _inputList

  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  }

  //функция появления ошибки
  _showInputError = (inputErrorClass, errorClass, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  }

  //функция скрытия ошибки
  _hideInputError = (inputErrorClass, errorClass, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  }

  //функция проверки валидности
  _checkInputValidity = (config, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(config.inputErrorClass, config.errorClass, formElement, inputElement);
    } else {
      this._hideInputError(config.inputErrorClass, config.errorClass, formElement, inputElement);
    }
  }

  //функция добавления слушателей событий форме и её полям
  _setEventListeners = (config, formElement) => {
    const buttonElement = this._formElement.querySelector(config.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(config, formElement, inputElement);
        this._toggleButtonState(config.inactiveButtonClass, buttonElement);
      });
    });
  }

  //функция валидации
  enableValidation = () => {
    this._setEventListeners(this._config, this._formElement);
  }

  //функция проверки невалидных полей
  _hasInvalidInput = () => {
    return Array.from(this._inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //функция переключения кнопки
  _toggleButtonState = (inactiveButtonClass, buttonElement) => {
    if(this._hasInvalidInput()) {
      this.disableSubmitButton(inactiveButtonClass, buttonElement);
    } else {
      this.enableSubmitButton(inactiveButtonClass, buttonElement);
    }
  }

  //функция включения блокированной кнопки
  disableSubmitButton = (inactiveButtonClass, buttonElement) => {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', "");
  }

  //функция отключения блокированной кнопки
  enableSubmitButton = (inactiveButtonClass, buttonElement) => {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled', "");
  }

  //функция очистки валидации
  clearError = (config, popup) => {
    const inputList = Array.from(popup.querySelectorAll(config.inputSelector));
    const formElement = popup.querySelector(config.formSelector);
    inputList.forEach((inputElement) => {
      this._hideInputError(config.inputErrorClass, config.errorClass, formElement, inputElement);
    });
  }
}
