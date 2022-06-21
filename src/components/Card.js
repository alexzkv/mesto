export default class Card {
  id
  _name
  _link
  _likes
  _cardSelector
  _handlePhotoClick
  _handleDeleteBtnClick
  _handleLikeBtnClick
  _handleDeleteLikeBtnClick

  constructor({ _id, name, link, likes },
    cardSelector, { handlePhotoClick, handleDeleteBtnClick,
    handleLikeBtnClick, handleDeleteLikeBtnClick }) {
    this.id = _id;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._cardSelector = cardSelector;
    this._handlePhotoClick = handlePhotoClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._handleLikeBtnClick = handleLikeBtnClick;
    this._handleDeleteLikeBtnClick = handleDeleteLikeBtnClick;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  handleDeleteCard = () => {
    this._card.remove();
    this._card = null;
  }

  _handleLikeCard = () => {
    this._btnCardLike.classList.toggle('card__like-btn_active');
    this._isLiked = !this._isLiked;
  }

  _toggleLikeCard() {
    if (this._isLiked) {
      this._handleDeleteLikeBtnClick(this);
    } else {
      this._handleLikeBtnClick(this);
    }
  }

  setLikes(card) {
    this._likes = card.likes;
    this._likesСounter.textContent = this._likes.lenght;
    this._handleLikeCard();
  }

  generateCard = () => {
    this._card = this._getTemplate();
    // this._card.dataset.cardId = this._id;
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__delete')
      .addEventListener('click', () => {
        this._handleDeleteBtnClick(this);
      });
    this._btnCardLike = this._card.querySelector('.card__like-btn');
    this._btnCardLike.addEventListener('click', this._handleLikeCard);
    this._likesСounter = this._card.querySelector('.card__like-count');
    this._cardImg = this._card.querySelector('.card__img');
    this._cardImg.src= this._link;
    this._cardImg.alt= this._name;
    this._cardImg.addEventListener('click',
      () => this._handlePhotoClick({name: this._name, link: this._link}));
    return this._card;
  }
}
