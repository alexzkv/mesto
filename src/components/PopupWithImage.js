import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(item) {
    const cardBigImage = this._popup.querySelector('.popup__image');
    const cardBigTitle = this._popup.querySelector('.popup__image-title');

    cardBigImage.src = item.link;
    cardBigImage.alt = item.name;
    cardBigTitle.textContent = item.name;

    super.open();
  }
}
