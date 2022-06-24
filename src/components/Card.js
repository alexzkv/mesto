export default class Card {
  _data
  _name
  _link
  _userId
  _ownerId
  _cardSelector
  _handlePhotoClick
  _handleDeleteIconClick
  _handleLikeIconClick
  _handleDislikeIconClick

  constructor(data, userId, cardSelector,
    { handleCardClick, handleDeleteBtnClick, handleLikeBtnClick, handleDislikeBtnClick }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handlePhotoClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteBtnClick;
    this._handleLikeIconClick = handleLikeBtnClick;
    this._handleDislikeIconClick = handleDislikeBtnClick;
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

  _isLiked = () => {
    return this._data.likes.some((item) => item._id === this._userId);
  }

  _isLikeStatus = () => {
    if(this._isLiked()) {
      this._handleDislikeIconClick(this._data);
    } else {
      this._handleLikeIconClick(this._data);
    }
  }

  _countLikes = (data) => {
    this._data.likes = data.likes;
    this._likesСounter.textContent = String(this._data.likes.length);
  }

  _chekOwnerLike = () => {
    if (this._isLiked()) {
      this.handleLikeCard(this._data);
    }
  }

  handleLikeCard = (data) => {
    this._btnCardLike.classList.add('card__like-btn_active');
    this._countLikes(data);
  }

  handleDislikeCard = (data) => {
    this._btnCardLike.classList.remove('card__like-btn_active');
    this._countLikes(data);
  }

  _chekOwnerCard = () => {
    if (this._userId !== this._ownerId) {
      this._btnDeleteCard.remove();
    }
  }

  generateCard = () => {
    this._card = this._getTemplate();

    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImg = this._card.querySelector('.card__img');
    this._cardImg.src= this._link;
    this._cardImg.alt= this._name;
    this._cardImg.addEventListener('click', () =>
      this._handlePhotoClick(this._data));

    this._btnDeleteCard = this._card.querySelector('.card__delete');
    this._btnDeleteCard.addEventListener('click', () =>
      this._handleDeleteIconClick(this._data._id));

    this._btnCardLike = this._card.querySelector('.card__like-btn');
    this._btnCardLike.addEventListener('click', this._isLikeStatus);
    this._likesСounter = this._card.querySelector('.card__like-count');
    this._likesСounter.textContent = String(this._data.likes.length);

    this._chekOwnerLike();
    this._chekOwnerCard();

    return this._card;
  }
}
