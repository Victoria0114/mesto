import Popup from './popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._inputList = this._popup.querySelectorAll('.popup__edit-form');
    this._form = this._popup.querySelector('.popup__form');
  }
  _getInputValues() {
    //собирает данные всех полей формы.
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  
  }
  
  setEventListeners() {
    //должен не только добавлять обработчик клика иконке закрытия, 
    //но и добавлять обработчик сабмита формы.
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }
  
  close() {
    //при закрытии попапа форма должна ещё и сбрасываться
    super.close();
    this._form.reset();
  }
}

//Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
