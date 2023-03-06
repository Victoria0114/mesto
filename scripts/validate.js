// const inputElement = document.querySelector('.popup__edit-form');

// inputElement.addEventListener('input', () => {
//   console.log(inputElement.validationMessage);
//   const isValid = inputElement.validity.valid;
//   if (isValid) {
//     inputElement.classList.remove('.popup__edit-form_type_error');
//   } else {
//     inputElement.classList.add('popup__edit-form_type_error');
//   }
// });


const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__edit-form',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__edit-form_type_error',
    errorClass: 'popup__span_error'
};

function enableValidation(validationOptions) {
    const formList = Array.from(document.querySelectorAll(validationOptions.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, validationOptions);
    });
}
  
function checkInputValidity(formElement, inputElement, validationOptions) {
    if (inputElement.validity.valid === true) {
      hideInputError(formElement, inputElement, validationOptions);
    } else {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationOptions);
    }
}

function showInputError(formElement, inputElement, errorMessage, validationOptions) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationOptions.inputErrorClass);
    errorElement.classList.add(validationOptions.errorClass);
    errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement, validationOptions) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationOptions.inputErrorClass);
    errorElement.classList.remove(validationOptions.errorClass);
    errorElement.textContent = '';
}

function setEventListeners(formElement, validationOptions) {
  const inputList = Array.from(
    formElement.querySelectorAll(validationOptions.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    validationOptions.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, validationOptions);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, validationOptions);
      toggleButtonState(inputList, buttonElement, validationOptions);
    });
  });
}

const disableButton = (buttonElement, validationOptions) => {
    buttonElement.classList.add(validationOptions.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
};

const enableButton = (buttonElement, validationOptions) => {
    buttonElement.classList.remove(validationOptions.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
};
  
const toggleButtonState = (inputList, buttonElement, validationOptions) => {
    if (hasInvalidInput(inputList)) {
      disableButton(buttonElement, validationOptions);
    } else {
      enableButton(buttonElement, validationOptions);
    }
};
  
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}

enableValidation(validationOptions);



//--------------------------------------------------------------------------------------------------------------------------- 