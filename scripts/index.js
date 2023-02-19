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
//--------------------------------------------------------------------
const popup = document.querySelector(".popup");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const addCardButton = document.querySelector('popup__save_type_new-card');

//const closeButton = document.querySelectorAll(".popup__close");
const closeEditProfile = document.querySelector('.popup__close_type_edit-profile')
const closeAddNewCard = document.querySelector('.popup__close_type_new-place')
const closeCard = document.querySelector('.popup__close_type_image')

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddNewCard = document.querySelector(".popup_type_new-place");

//-----------------------------Input-----------------------------------
const formElement = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__edit-form_input_name");
const aboutInput = document.querySelector(".popup__edit-form_input_about");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const addNameInput = document.querySelector('.popup__edit-form_input_place-name');
const addLinkInput = document.querySelector('.popup__edit-form_input_link');

//---------------------------------------------------------------------------


const openPopup = (type) => {
  type.classList.add('popup_opened');
}; 

editButton.addEventListener('click', function() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

closeEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});
closeAddNewCard.addEventListener('click', () => {
  closePopup(popupAddNewCard);
});
closeCard.addEventListener('click', () => {
  closePopup(popupCard);
});

//-------------------------SaveBtnProfile------------------------------

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
};
formElement.addEventListener('submit', handleFormSubmit);

//----------------------------NewCard-----------------------------------------------

const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;
const popupCard = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');

const createNewCard = (name, link) => {
  const newCard = cardTemplate.cloneNode(true);
  const cardImage = newCard.querySelector('.card__image');
  const cardPlace = newCard.querySelector('.card__mesto');
  cardImage.src = link;
  cardPlace.textContent = name;

  const likeButton = newCard.querySelector('.card__like');
  likeButton.addEventListener('click', evt => {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newCard.querySelector('.card__trashbin');
  deleteButton.addEventListener('click', evt => {
    evt.target.closest('.card').remove();
  });
  
  const openBigImage = () => {
    openPopup(popupCard);
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.textContent;
    popupPlace.textContent = cardPlace.textContent;
  };

  cardImage.addEventListener('click', openBigImage);
  return newCard;
};

const anyCard = (name, link) => {
  cards.append (createNewCard (name, link));
};

initialCards.forEach((card) => {
  anyCard(card.name, card.link);
});

const  submitFormAddSubmit = (evt) => {
  evt.preventDefault();
  cards.prepend(createNewCard(addNameInput.value, addLinkInput.value));
  evt.target.reset();
  closePopup(popupAddNewCard);
};

editButton.addEventListener("click", () => openPopup(popupEditProfile));
addButton.addEventListener("click", () => openPopup(popupAddNewCard));

popupAddNewCard.addEventListener("submit", submitFormAddSubmit);

closeEditProfile.addEventListener("click", closePopup);
closeAddNewCard.addEventListener("click", closePopup);
closeCard.addEventListener("click", closePopup);
