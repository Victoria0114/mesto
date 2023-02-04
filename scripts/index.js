const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close");
let nameInput = document.querySelector('.popup__edit-form_input_name');
let aboutInput = document.querySelector('.popup__edit-form_input_about');
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");


const handleEditButtonClick = () => {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

const handleCloseButtonClick = () => {
  popup.classList.remove('popup_opened');
};

editButton.addEventListener("click", handleEditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);

let formElement = document.querySelector(".popup__form");
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    handleCloseButtonClick();
}
formElement.addEventListener('submit', handleFormSubmit);
