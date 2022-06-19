export default class FormValidator {
  _config
  _formElement
  _buttonElement
  _inputList

  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  }

  //функция появления ошибки
  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if (!errorElement) return;
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  //функция скрытия ошибки
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if (!errorElement) return;
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  //функция проверки валидности
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
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
      this._hideInputError(inputElement);
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
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}
