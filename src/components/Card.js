export default class Card {
    constructor(cardData, userId, templateSelector, handleCardClick, { handleLikeClick, handleDeleteClick }) {
      this._name = cardData.name;
      this._link = cardData.link;
      this._likes = cardData.likes;
      this._cardId = cardData._id;
      this._ownerId = cardData.owner._id;
      this._userId = userId;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content.querySelector('.card')
          .cloneNode(true);
      
        return cardElement;
    }

    putLike(likesArray) {
        this._likeCounter.textContent = likesArray.length;
        this._buttonLike.classList.add('card__like_active');
        this._isLiked = true;
    }

    deleteLike(likesArray) {
        this._likeCounter.textContent = likesArray.length;
        this._buttonLike.classList.remove('card__like_active');
        this._isLiked = false;    
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }
    _setEventListeners() {
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeClick(this._cardId, this._isLiked);
          });
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteClick(this._cardId);
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._cardImage.src, this._cardImage.alt);
        });
    }
    generateCard() {
        this._card = this._getTemplate();
        this._cardImage = this._card.querySelector('.card__image');
        this._cardName = this._card.querySelector('.card__mesto');
        this._buttonLike = this._card.querySelector(".card__like");
        this._buttonDelete = this._card.querySelector(".card__trashbin");
        this._likeCounter = this._card.querySelector('.card__like-counter');

        this._likeCounter.textContent = this._likes.length;
       

        if (this._likes.some((user) => user._id === this._ownerId)) {
            this._isLiked = true;
            this._buttonLike.classList.add('card__like_active');
        } else {
            this._isLiked = false;
            this._buttonLike.classList.remove('card__like_active');
        }
      
        if (this._ownerId !== this._userId) {
            this._buttonDelete.remove();
        }

        this._setEventListeners();

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardName.textContent = this._name;
        //this._cardName.querySelector('.card__mesto').textContent = this._name;

        return this._card;
    } 
}