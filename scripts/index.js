//--------------------------------------------------------------------
const popup = document.querySelector(".popup");

const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
const buttonOpenAddCardPopup = document.querySelector(".profile__add-button");

const addCardButton = document.querySelector('popup__save_type_new-card');

//const closeButton = document.querySelectorAll(".popup__close");
const buttonCloseEditProfilePopup = document.querySelector('.popup__close_type_edit-profile')
const buttonCloseAddCardPopup = document.querySelector('.popup__close_type_new-place')
const buttonCloseImagePopup = document.querySelector('.popup__close_type_image')

const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const popupAddNewCard = document.querySelector(".popup_type_new-place");

//-----------------------------Input-----------------------------------
const formEditProfile = document.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__edit-form_input_name");
const aboutInput = document.querySelector(".popup__edit-form_input_about");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const addNameInput = document.querySelector('.popup__edit-form_input_place-name');
const addLinkInput = document.querySelector('.popup__edit-form_input_link');

//---------------------------------------------------------------------------

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

// buttonCloseEditProfilePopup.addEventListener('click', () => {
//   closePopup(popupEditProfile);
// });
// buttonCloseAddCardPopup.addEventListener('click', () => {
//   closePopup(popupAddNewCard);
// });
// buttonCloseImagePopup.addEventListener('click', () => {
//   closePopup(popupCard);
// });

const overlayClosePopup = document.querySelectorAll(".popup");
overlayClosePopup.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close")) {
      closePopup(evt.currentTarget);
    }
  });
});
//-------------------------SaveBtnProfile------------------------------

function submitEditProfileForm (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closePopup(popupEditProfile);
};
formEditProfile.addEventListener('submit', submitEditProfileForm);

//----------------------------NewCard-----------------------------------------------

const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;
const popupCard = document.querySelector('.popup_type_image');
const imagePopup = popupCard.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');

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
  
  const openBigImage = () => {
    openPopup(popupCard);
    imagePopup.src = cardImage.src;
    imagePopup.alt = cardImage.textContent;
    popupPlace.textContent = cardPlace.textContent;
  };

  cardImage.addEventListener('click', openBigImage);
  return newCard;
};

const addInitialCard = (name, link) => {
  cards.append (createNewCard (name, link));
};

initialCards.forEach((card) => {
  addInitialCard(card.name, card.link);
});

const  submitAddCardForm = (evt) => {
  evt.preventDefault();
  cards.prepend(createNewCard(addNameInput.value, addLinkInput.value));
  evt.target.reset();
  enableValidation(validationOptions);
  closePopup(popupAddNewCard);
};

buttonOpenAddCardPopup.addEventListener("click", () => openPopup(popupAddNewCard));

popupAddNewCard.addEventListener("submit", submitAddCardForm);