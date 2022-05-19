export class FormValidator {
  _config
  _formElement
  _inputList
  _inactiveButtonClass
  _buttonElement

  constructor(config, formElement, inactiveButtonClass) {
    this._config = config;
    this._formElement = formElement;
    this._inactiveButtonClass = inactiveButtonClass;
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
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

  //функция проверки невалидных полей
  _hasInvalidInput = () => {
    return Array.from(this._inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //функция валидации
  enableValidation = () => {
    this._setEventListeners();
  }

  //функция очистки валидации
  clearError = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(this._config.inputErrorClass, this._config.errorClass, this._formElement, inputElement);
    });
  }

  //функция переключения кнопки
  _toggleButtonState = () => {
    if(this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  //функция включения блокированной кнопки
  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', "");
  }

  //функция отключения блокированной кнопки
  enableSubmitButton = () => {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled', "");
  }

  //функция добавления слушателей событий форме и её полям
  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._config, this._formElement, inputElement);
        this._toggleButtonState();
      });
    });
  }
}
