export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__edit-form',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__edit-form_type_error',
    errorClass: 'popup__span_error'
};

/* все окна-popup */
//export const popup = document.querySelector(".popup");
//export const popupEditProfileSelector = document.querySelector(".popup_type_edit-profile");
//export const popupAddCardSelector = document.querySelector(".popup_type_new-place");
//export const popupCardImageSelector = document.querySelector('.popup_type_image');

export const popupEditProfileSelector = '.popup_type_edit-profile'; 
export const popupAddCardSelector = '.popup_type_new-place'; 
export const popupCardImageSelector = '.popup_type_image';

/* кнопки открытия */
export const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
export const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");

/* форма Редактировать профиль */
//export const formEditProfile = document.querySelector("form-edit-profile");
export const formEditProfile = document.querySelector('[name="form-edit-profile"]');


/* форма Новое место */
//export const formCard = document.querySelector("form-add-card");
export const formCard = document.querySelector('[name="form-add-card"]');
/* template */
export const cardTemplateSelector = '#card-template';

/* контейнер для карточек */
export const cardsContainerSelector = '.cards'; 