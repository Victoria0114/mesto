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
// export const userNameSelector = document.querySelector('.profile__name');
// export const userAboutSelector = document.querySelector('.profile__about');
// export const userAvatarSelector = document.querySelector('.profile__avatar');

export const userNameSelector = '.profile__name';
export const userAboutSelector = '.profile__about';
export const userAvatarSelector = '.profile__avatar';
//
/* кнопки */
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-button');

/* форма Редактировать профиль */
//export const formProfile = document.forms('[name='form-edit-profile']');
export const formProfile = document.forms['form-edit-profile'];

/* форма Новое место */
//export const formCard = document.querySelector('[name='form-add-card']');
export const formCard = document.forms['form-add-card'];
//export const formCard = document.getElementsByName('form-add-card');

/* форма Аватар */
//export const formAvatar = document.querySelector('[name='form-avatar']');
export const formAvatar = document.forms['form-avatar'];

/* template */
export const cardTemplateSelector = '#card-template';

/* контейнер для карточек */
export const cardsContainerSelector = '.cards'; 