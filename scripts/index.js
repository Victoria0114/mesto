const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close");
let nameInput = document.querySelector('.popup__edit-form_input_name').value;
let profileName = document.querySelector(".profile__name");

let formElement = document.querySelector(".form");

const handleeditButtonClick = () => {
  popup.classList.add('popup_opened');
};

const handleCloseButtonClick = () => {
  popup.classList.remove('popup_opened');
};
editButton.addEventListener("click", handleeditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    // // Получите значение полей jobInput и nameInput из свойства value
    // // Выберите элементы, куда должны быть вставлены значения полей
    // // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput;
    profileName.textContent = nameInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);


// 
// let profileAbout = document.querySelector(".profile__about");
// let nameInput = document.querySelector("popup__edit-form_input_name").value;
// profileName.textContent = nameInput.value;
// popup.querySelector(".profile__name").textContent = nameInput.value;
// document.getprofileName
// console.log(nameInput);