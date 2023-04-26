export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content.querySelector('.card')
          .cloneNode(true);
      
        return cardElement;
    }

    _like() {
        this._buttonLike.classList.toggle("card__like_active");
    }
    _trash() {
        this._buttonDelete.closest('.card').remove();
        //this._card.remove();
        //this._card = null;
    }
    _setEventListeners() {
        this._buttonLike.addEventListener("click", () => {
            this._like();
        });
        this._buttonDelete.addEventListener("click", () => {
            this._trash();
        });
        this._cardImage.addEventListener("click", () => {
            this._handleCardClick(this._link, this._name);
        });
    }
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__image');
        this._cardName = this._element.querySelector('.card__mesto');
        this._buttonLike = this._element.querySelector(".card__like");
        this._buttonDelete = this._element.querySelector(".card__trashbin");

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardName.textContent = this._name;
        //this._cardName.querySelector('.card__mesto').textContent = this._name;

        this._setEventListeners();
    
        return this._element;
    } 
}