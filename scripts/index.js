
//--------------------------------------------------------------------
//const popup = document.querySelector(".popup");

//--------------------------------Кнопки------------------------------------

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
//const closeButton = document.querySelectorAll(".popup__close");
const closeEditProfile = document.querySelector('.popup__close_type_edit-profile')
const closeAddNewCard = document.querySelector('.popup__close_type_new-place')
const closeCard = document.querySelector('.popup__close_type_image')

//---------------------------------Окна-------------------------------------

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddNewCard = document.querySelector(".popup_type_new-place");
const popupCard = document.querySelector('.popup_type_image');

//-----------------------------Внутри окна-----------------------------------

let nameInput = document.querySelector(".popup__edit-form_input_name");
let aboutInput = document.querySelector(".popup__edit-form_input_about");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

let formElement = document.querySelector(".popup__form");

//---------------------------------------------------------------------------

const popupImage = document.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');
const cardImage = document.querySelector('.card__image');
const cardPlace = document.querySelector('.card__mesto');
//--------------------------------Popup-------------------------------------

const openPopup = (type) => {
  type.classList.add('popup_opened');
  if (type === popupEditProfile) {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
  };
}; 
editButton.addEventListener("click", () => openPopup(popupEditProfile));
addButton.addEventListener("click", () => openPopup(popupAddNewCard));

const closePopup = () => {
  popupEditProfile.classList.remove('popup_opened');
  popupAddNewCard.classList.remove('popup_opened');
  popupCard.classList.remove('popup_opened');
};
closeEditProfile.addEventListener("click", closePopup);
closeAddNewCard.addEventListener("click", closePopup);
closeCard.addEventListener("click", closePopup);

//-------------------------Кнопки сохранения------------------------------

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
};
//formElement.addEventListener('submit', handleFormSubmit);

const  handleFormAddSubmit = (evt) => {
evt.preventDefault();
closePopup(closeAddNewCard);
};
//formElement.addEventListener('submit', handleFormAddSubmit);

//---------------------------------------------------------------------------


const cards = document.querySelector('.cards');

let NameInput = document.querySelector(".popup__edit-form_input_place-name");
let linkInput = document.querySelector(".popup__edit-form_input_link");

const openBigImage = () => {
  openPopup(popupCard);
  cardElement.src = cardImage.src;
  cardElement.textContent = cardName.textContent;
}
cardImage.addEventListener('click', openBigImage);

//-------------------------------CardsArray--------------------------------
const initialCards = [
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

initialCards.forEach (function (value) {
  const cardTemplate = document.querySelector('#card-template').content; 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true); 
  cardElement.querySelector('.card__image').src = value.link;
  cardElement.querySelector('.card__mesto').textContent = value.name;
  // const cardImage = cardTemplate.querySelector('.card__image');
  // const cardName = cardTemplate.querySelector('.card__mesto');
  // cardImage.src = value.link;
  // cardName.textContent = value.name;


  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardElement.querySelector('.card__trashbin').addEventListener('click', function(){
    cardElement.remove();
  });

  cards.append(cardElement);
});
//--------------------------------------------------------------------------

// const handleEditButtonClick = () => {
//   popup.classList.add("popup_opened");
//   nameInput.value = profileName.textContent;
//   aboutInput.value = profileAbout.textContent;
// };
// const handleAddButtonClick = () => {
//   popupAddNewCard.classList.add('popup_opened');
// };
// const handleCloseButtonClick = () => {
//   popup.classList.remove('popup_opened');
// };
// const handleOpenCardClick = () => {
//   openCard.classList.add('popup_opened');
// };

//-----------------------------------------------------------------------

//editButton.addEventListener("click", handleEditButtonClick);
//addButton.addEventListener("click", handleAddButtonClick);
//closeButton.addEventListener("click", handleCloseButtonClick);
//cardImage.addEventListener("click", handleOpenCardClick);


