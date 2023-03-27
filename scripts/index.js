import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, validationOptions } from './constants.js';


//------------------------------переменные-------------------------------//

/*** все окна ***/
const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddNewCard = document.querySelector(".popup_type_new-place");
const popupCard = document.querySelector('.popup_type_image');

/*** кнопки открытия ***/
const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");


/* формы модальных окон */


/***  данные модального окна профиля и его инпуты ***/
const nameInput = document.querySelector(".popup__edit-form_input_name");
const aboutInput = document.querySelector(".popup__edit-form_input_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

/*** инпуты модального окна добавления карточек ***/
const addNameInput = document.querySelector('.popup__edit-form_input_place-name');
const addLinkInput = document.querySelector('.popup__edit-form_input_link');

/* все карточки */
const cards = document.querySelector('.cards');

/* просмотр изображения */
const popupCardImage = document.querySelector('.popup__image'); 
const popupCardPlace = document.querySelector('.popup__place');
const imagePopup = popupCard.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');

//-------------------------------///-----------------------------------//
const formEditProfile = document.querySelector(".popup__form");

const addCardButton = document.querySelector('popup__save_type_new-card');

const buttonSubmitAddCard = popupAddNewCard.querySelector('.popup__save');

//const cardTemplate = document.querySelector('#card-template').content;

//-------------------------------Функции-----------------------------------//

// валидатор формы "Редактировать профиль"
const formProfileValidator = new FormValidator(validationOptions,formEditProfile);
formProfileValidator.enableValidation();

// валидатор формы "Новое место"
const formCardValidator = new FormValidator(validationOptions, popupAddNewCard);
formCardValidator.enableValidation();

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closeByEscape);
}; 

buttonOpenEditProfilePopup.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

const closePopup = (popups) => {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const overlayClosePopup = document.querySelectorAll(".popup");
overlayClosePopup.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close")) {
      closePopup(evt.currentTarget);
    }
  });
});

// обработчик submit формы "Редактировать профиль"
function submitEditProfileForm (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
};
formEditProfile.addEventListener('submit', submitEditProfileForm);

// обработчик открытия формы "Новое место"
const openFormCard = () => {
  formCardValidator.resetValidation();
  openPopup(popupNewPlace);
};
// открыть форму "Новое место"
buttonOpenAddCardPopup.addEventListener("click", openFormCard);

const createNewCard = (name, link) => {
  const newCard = cardTemplate.cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardPlace = newCard.querySelector('.card__mesto');
  cardImage.src = link;
  cardImage.alt = name;
  cardPlace.textContent = name;

  const likeButton = newCard.querySelector('.card__like');
  likeButton.addEventListener('click', evt => {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newCard.querySelector('.card__trashbin');
  deleteButton.addEventListener('click', evt => {
    evt.target.closest('.card').remove();
  });
  
  cardImage.addEventListener('click', openBigImage);
  return newCard;
};

const openBigImage = () => {
  openPopup(popupCard);
  imagePopup.src = cardImage.src;
  imagePopup.alt = cardImage.textContent;
  popupPlace.textContent = cardPlace.textContent;
};
const openImagePopup = (name, link) => {
  openPopup(popupImageCard);
  popupCardImage.src = link;
  popupCardPlace.textContent = name; 
  popupCardImage.alt = name;
};


//создать карточку
const generateCard = (data) => {
  const card = new Card(data, "#card-template", openImagePopup);
  return card.generateCard();
};
// добавить карточки из массива
initialCards.forEach((data) => {
  cards.append(generateCard(data));
});


const  submitAddCardForm = (evt) => {
  evt.preventDefault();
  cards.prepend(createNewCard(addNameInput.value, addLinkInput.value));
  evt.target.reset();
  disableButton(buttonSubmitAddCard, validationOptions);
  closePopup(popupAddNewCard);
};

buttonOpenAddCardPopup.addEventListener("click", () => openPopup(popupAddNewCard));

popupAddNewCard.addEventListener("submit", submitAddCardForm);