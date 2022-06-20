import Popup from './Popup';

export default class PopupWithForm extends Popup {
  _submitForm
  _form
  _inputList
  _submitButton
  _defaultTextSubmitButton

  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
    this._submitButton = this._popup.querySelector('.popup__save-button');
    this._defaultTextSubmitButton = this._submitButton.textContent;
  }

  _getInputValues = () => {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  close = () => {
    super.close();
    this._form.reset();
    this._submitButton.textContent = this._defaultTextSubmitButton;
  }

  isSaving() {
    this._submitButton.textContent = 'Сохранение...';
  }
}

