import Popup from './Popup';

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setSubmitAction = (action) => {
    this._handleSubmitCallback = action;
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
}
