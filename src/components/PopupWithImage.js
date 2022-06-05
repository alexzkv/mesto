import Popup from './Popup';

export default class PopupWithImage extends Popup {
  open({ link, name }) {
    const bigCardImage = this._popup.querySelector('.popup__image');
    const bigCardTitle = this._popup.querySelector('.popup__image-title');
    bigCardImage.src = link;
    bigCardImage.alt = name;
    bigCardTitle.textContent = name;
    super.open();
  }
}
