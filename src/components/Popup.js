export default class Popup {
  _popup

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._popup.addEventListener('mousedown', this._setEventListeners);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('mousedown', this._setEventListeners);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _setEventListeners = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      this.close();
    }
  }
}
