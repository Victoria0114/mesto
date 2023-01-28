const editButton = document.querySelector(".profile__edit-button");

console.log('моя кнопка: ', editButton)

const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close");

const toggleOpenPopup = () => {
  popup.classList.toggle("popup_opened");
};

const handleeditButtonClick = () => {
  toggleOpenPopup();
};

const handleCloseButtonClick = () => {
  toggleOpenPopup();
};

const handleOverlyClick = (event) => {
  if (event.target === event.currentTarget) {
    toggleOpenPopup();
  }
};

editButton.addEventListener("click", handleeditButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);

popup.addEventListener("click", handleOverlyClick);



// Находим форму в DOM
let formElement = popup.querySelector(".popup__save");
// Находим поля формы в DOM
let nameInput = popup.querySelector(".popup__name");
let aboutInput = popup.querySelector(".popup__about");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);