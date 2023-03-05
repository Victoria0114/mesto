const validationOptions = {
    formSelector: '.popup__form',
    inputSelector: '.popup__edit-form',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__edit-form_type_error',
    errorClass: 'popup__span_error_visible'
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
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        validationOptions
      );
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
    errorElement.textContent = "";
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
  
// //   resetButton.addEventListener('click', () => {
// //     const inputs = Array.from(formSignIn.querySelectorAll('.form__input'));
// //     /**
// //      * Комментарий №3 (Последний)
// //      * Вместо функции hiddenErrorForInput теперь вызывается setInputState
// //      * с нужным состоянием для инпута (валидное или невалидное)
// //      */
// //     
// //-----------------------
// inputs.forEach(inputElement => {
//     //       setInputState(input, true, validationOptions);
//     //     });
//     //     disableButton(submitButton, validationOptions.disabledButtonClass);
//     //   });

// const hiddenError = (errorElement, inputErrorClass) => {
// 	errorElement.innerText = '';
// 	errorElement.classList.remove(inputErrorClass);
// };

// const showError = (errorElement, message, inputErrorClass) => {
// 	errorElement.innerText = message;
// 	errorElement.classList.add(inputErrorClass);
// };

// /**
//  * Комментарий №1
//  * Обновил тут код, теперь функция setInputState (новая) принимает 3 параметра
//  * inputElement, isValid, options
//  * isValid - это состояние input (валидное там значение или нет)
//  */
// const setInputState = (inputElement, isValid, options) => {
// 	const { inputSectionSelector, inputErrorSelector, inputErrorClass } = options;
// 	const inputSectionElement = inputElement.closest(inputSectionSelector);
// 	const errorElement = inputSectionElement.querySelector(inputErrorSelector);
// 	if (isValid) {
// 		hiddenError(errorElement, inputErrorClass);
// 	} else {
// 		showError(errorElement, inputElement.validationMessage, inputErrorClass);
// 	}
// };

// /**
//  * Комментарий №2
//  * Обновил тут код, теперь функция toggleInputState просто
//  * вызывает setInputState со значение того, ввалидный инпут или нет
//  * Удалил функции hiddenErrorForInput и findInputErrorElement
//  */
// const toggleInputState = (inputElement, options) => {
// 	const isValid = inputElement.validity.valid;
// 	setInputState(inputElement, isValid, options);
// };

// const enableButton = (buttonElement, disabledButtonClass) => {
// 	buttonElement.removeAttribute('disabled');
// 	buttonElement.classList.remove(disabledButtonClass);
// };

// const disableButton = (buttonElement, disabledButtonClass) => {
// 	buttonElement.setAttribute('disabled', true);
// 	buttonElement.classList.add(disabledButtonClass);
// };

// const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
// 	const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

// 	if (formIsValid) {
// 		enableButton(submitElement, disabledButtonClass);
// 	} else {
// 		disableButton(submitElement, disabledButtonClass);
// 	}
// };

// const setEventListeners = (form, options) => {
// 	const submitElement = form.querySelector(options.submitSelector);
// 	const inputs = Array.from(form.querySelectorAll(options.inputSelector));

// 	inputs.forEach(inputElement => {
// 		inputElement.addEventListener('input', () => {
// 			toggleInputState(inputElement, options);
// 			toggleButtonState(inputs, submitElement, options.disabledButtonClass);
// 		});
// 	});
// 	toggleButtonState(inputs, submitElement, options.disabledButtonClass);
// };

// const enableValidation = ({
// 	formSelector,
// 	submitSelector,
// 	inputSelector,
// 	inputSectionSelector,
// 	inputErrorSelector,
// 	inputErrorClass,
// 	disabledButtonClass,
// }) => {
// 	const forms = Array.from(document.querySelectorAll(formSelector));
// 	forms.forEach(form => {
// 		setEventListeners(form, {
// 			submitSelector,
// 			inputSelector,
// 			inputSectionSelector,
// 			inputErrorSelector,
// 			inputErrorClass,
// 			disabledButtonClass,
// 		});
// 	});
// };