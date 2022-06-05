import Popup from './Popup';

export default class PopupWithImage extends Popup {
  open(item) {
    const bigCardImage = this._popup.querySelector('.popup__image');
    const bigCardTitle = this._popup.querySelector('.popup__image-title');
    bigCardImage.src = item.link;
    bigCardImage.alt = item.name;
    bigCardTitle.textContent = item.name;
    super.open();
  }
}
