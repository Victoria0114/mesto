//
export default class Popup {
  constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
    }
  
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  
    _handleEscClose(evt) {
      //закрытия попапа клавишей Esc.
      if (evt.key === 'Escape') {
        this.close();
      }
    }

    // setEventListeners() {
    //   //добавляет слушатель клика иконке закрытия попапа. 
    //   //Модальное окно также закрывается при клике на затемнённую область вокруг формы.    
    //   this._popup.addEventListener('mousedown', (evt) => {
    //   if (evt.target.classList.contains('popup_opened') 
    //   || 
    //   evt.target.classList.contains('popup__close')) {
    //     this.close();
    //    }
    //   }
    

    setEventListeners() { 
      this._popup.addEventListener('mousedown', (evt) => { 
      if (evt.target.classList.contains('popup_opened') 
      || 
      evt.target.classList.contains('popup__close')) { 
        this.close(); } }) 
    }
}