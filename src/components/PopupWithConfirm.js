import Popup from './Popup';

export default class PopupWithConfirm extends Popup {

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    this._popup.querySelector('.popup__save-button_yes').addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
    super.setEventListeners();
  }
}
