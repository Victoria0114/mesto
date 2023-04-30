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
export const popupEditProfileSelector = '.popup_type_edit-profile'; 
export const popupAddCardSelector = '.popup_type_new-place'; 
export const popupCardImageSelector = '.popup_type_image';
export const popupFormConfirmationSelector = '.popup_type_delete-card';
export const popupFormAvatarSelector = '.popup_type_avatar';

/* профиль пользователя */
export const userNameSelector = '.profile__name';
export const userJobSelector = '.profile__about';
export const userAvatarSelector = '.profile__avatar';

/* кнопки */
//export const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
//export const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-button');

/* форма Редактировать профиль */
//export const formEditProfile = document.querySelector('[name='form-edit-profile']');
export const formProfile = document.forms['form-edit-profile'];

/* форма Новое место */
//export const formCard = document.querySelector('[name='form-add-card']');
export const formCard = document.forms['form-add-card'];

/* форма Аватар */
//export const formAvatar = document.querySelector('[name='form-avatar']');
export const formAvatar = document.forms['form-avatar'];

/* template */
export const cardTemplateSelector = '#card-template';

/* контейнер для карточек */
export const cardsContainerSelector = '.cards'; 