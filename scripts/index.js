import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, validationOptions } from './constants.js';

/* все окна */
const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddNewCard = document.querySelector(".popup_type_new-place");
const popupCard = document.querySelector('.popup_type_image');

/* кнопки открытия */
const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");

/* формы модальных окон */
/* данные модального окна профиля и его инпуты */
const nameInput = document.querySelector(".popup__edit-form_input_name");
const aboutInput = document.querySelector(".popup__edit-form_input_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

/* инпуты модального окна добавления карточек ***/
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

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closeByEscape);
}; 

const closePopup = (popups) => {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}
const overlayClosePopup = document.querySelectorAll(".popup");
overlayClosePopup.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close")) {
      closePopup(evt.currentTarget);
    }
  });
});


const openImagePopup = (name, link) => {
  openPopup(popupCard);
  popupCardImage.src = link;
  popupCardPlace.textContent = name; 
  popupCardImage.alt = name;
};

const generateCard = (data) => {
  const card = new Card(data, "#card-template", openImagePopup);
  return card.generateCard();
};
// добавление карточки из массива
initialCards.forEach((data) => {
  cards.append(generateCard(data));
});

// обработчик открытия формы "Редактировать профиль"
const openFormProfile = () => {
  formProfileValidator.resetValidation();
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  openPopup(popupEditProfile);
};

// обработчик submit формы "Редактировать профиль"
const submitFormProfile = () => {
  // evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
};
// formEditProfile.addEventListener('submit', submitEditProfileForm);




// const  submitAddCardForm = (evt) => {
//   evt.preventDefault();
//   cards.prepend(createNewCard(addNameInput.value, addLinkInput.value));
//   evt.target.reset();
//   disableButton(buttonSubmitAddCard, validationOptions);
//   closePopup(popupAddNewCard);
// };

// обработчик открытия формы "Новое место"
const openFormCard = () => {
  formCardValidator.resetValidation();
  openPopup(popupAddNewCard);
};

// обработчик submit формы "Новое место"
const submitFormCard = (evt) => {
  const data = {
    name: addNameInput.value,
    link: addLinkInput.value,
  };
  cards.prepend(generateCard(data));
  evt.target.reset();
  closePopup(popupAddNewCard);
};


// buttonOpenAddCardPopup.addEventListener("click", () => openPopup(popupAddNewCard));

// popupAddNewCard.addEventListener("submit", submitAddCardForm);




// слушатели

// открыть форму "Редактировать профиль"
buttonOpenEditProfilePopup.addEventListener("click", openFormProfile);

// сохранить (закрыть) форму "Редактировать профиль"
formEditProfile.addEventListener("submit", submitFormProfile);

// открыть форму "Новое место"
buttonOpenAddCardPopup.addEventListener("click", openFormCard);

// сохранить (закрыть) форму "Новое место"
popupAddNewCard.addEventListener("submit", submitFormCard);


console.log(`.${inputElement.id}-error`)



// buttonOpenEditProfilePopup.addEventListener('click', function() {
//   openPopup(popupEditProfile);
//   nameInput.value = profileName.textContent;
//   aboutInput.value = profileAbout.textContent;
// });


// const createNewCard = (name, link) => {
//   const newCard = cardTemplate.cloneNode(true);
//   const cardImage = newCard.querySelector('.card__image');
//   const cardPlace = newCard.querySelector('.card__mesto');
//   cardImage.src = link;
//   cardImage.alt = name;
//   cardPlace.textContent = name;

//   const likeButton = newCard.querySelector('.card__like');
//   likeButton.addEventListener('click', evt => {
//     evt.target.classList.toggle('card__like_active');
//   });

//   const deleteButton = newCard.querySelector('.card__trashbin');
//   deleteButton.addEventListener('click', evt => {
//     evt.target.closest('.card').remove();
//   });
  
//   cardImage.addEventListener('click', openBigImage);
//   return newCard;
// };

// const openBigImage = () => {
//   openPopup(popupCard);
//   imagePopup.src = cardImage.src;
//   imagePopup.alt = cardImage.textContent;
//   popupPlace.textContent = cardPlace.textContent;
// };