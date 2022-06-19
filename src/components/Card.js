export default class Card {
  _name
  _link
  _id
  _cardSelector
  _handlePhotoClick

  constructor({name, link, _id}, cardSelector, handlePhotoClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handlePhotoClick = handlePhotoClick;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _handleDeleteCard = (evt) => {
    this._card.remove();
    this._card = null;
  }

  _handleLikeCard = () => {
    this._btnCardLike.classList.toggle('card__like-btn_active');
  }

  generateCard = () => {
    this._card = this._getTemplate();
    // this._card.dataset.cardId = this._id;
    this._btnCardLike = this._card.querySelector('.card__like-btn');
    this._cardImg = this._card.querySelector('.card__img');
    this._cardImg.src= this._link;
    this._cardImg.alt= this._name;
    this._card.querySelector('.card__title').textContent = this._name;
    this._btnCardLike.addEventListener('click', this._handleLikeCard);
    this._card.querySelector('.card__delete')
      .addEventListener('click', this._handleDeleteCard);
    this._cardImg.addEventListener('click',
      () => this._handlePhotoClick({name: this._name, link: this._link}));
    return this._card;
  }
}
