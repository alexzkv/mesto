import Popup from './Popup';

export default class PopupWithImage extends Popup {
  _bigCardImage
  _bigCardTitle

  constructor(popupSelector) {
    super(popupSelector);
    this._bigCardImage = this._popup.querySelector('.popup__image');
    this._bigCardTitle = this._popup.querySelector('.popup__image-title');
  }

  open({ link, name }) {
    this._bigCardImage.src = link;
    this._bigCardImage.alt = name;
    this._bigCardTitle.textContent = name;
    super.open();
  }
}
