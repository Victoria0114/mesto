import './index.css';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import { 
  initialCards, 
  validationOptions,
  popupEditProfileSelector,
  popupAddCardSelector,
  popupCardImageSelector,
  buttonOpenEditProfilePopup,
  buttonOpenAddCardPopup,
  formEditProfile,
  formCard,
  cardTemplateSelector,
  cardsContainerSelector
} from '../utils/constants.js';

// валидатор формы "Редактировать профиль"
const formProfileValidator = new FormValidator(
  validationOptions,
  formEditProfile
  );
formProfileValidator.enableValidation();

// валидатор формы "Новое место"
const formCardValidator = new FormValidator(validationOptions, formCard);
formCardValidator.enableValidation();

// редактирование профиля
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__about'
});

// обработчик редактирования профиля
const handleEditProfile = () => {
  const {name, job} = userInfo.getUserInfo();
  formEditProfile.name.value = name;
  formEditProfile.job.value = job;
  formProfileValidator.resetValidation();
  popupEditProfile.open();
};

// обработчик submit профиля
const handleSubmitProfile = (data) => {
  userInfo.setUserInfo(data);
  popupEditProfile.close();
};

// обработчик добавления карточки
const handleAddCard = () => {
  formCardValidator.resetValidation();
  popupAddCard.open();
};

// обработчик submit карточки
const handleSubmitCard = ({place: name, link}) => {
  renderCard({name, link});
  popupAddCard.close();
};

// обработчик клика по картинке карточки (открыть)
const handleCardClick = (cardImageSrc, cardImageAlt) => {
  popupCardImage.open(cardImageSrc, cardImageAlt);
};

// создать отдельную карточку
const createCard = (data) => {
  const card = new Card(data, cardTemplateSelector, handleCardClick);
  return card.generateCard();
};

// отрисовать готовую карточку
const renderCard = (data) => {
  cardsList.addItem(createCard(data));
};

// отрисовать все карточки
const cardsList = new Section({
  items: initialCards,
  renderer: renderCard
}, cardsContainerSelector);

cardsList.renderItems();

// слушатели

// кнопка редактировать профиль
buttonOpenEditProfilePopup.addEventListener('click', handleEditProfile);

// кнопка добавить карточку
buttonOpenAddCardPopup.addEventListener('click', handleAddCard);

// submit профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, handleSubmitProfile);
popupEditProfile.setEventListeners();

// submit добавл карт
const popupAddCard = new PopupWithForm(popupAddCardSelector, handleSubmitCard);
popupAddCard.setEventListeners();

// закрытиe картинки карточки
const popupCardImage = new PopupWithImage(popupCardImageSelector);
popupCardImage.setEventListeners();