import './index.css';
import Api from "../components/Api.js";
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithСonfirmation from '../components/PopupWithСonfirmation.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import { 
  validationOptions,
  popupEditProfileSelector,
  popupFormAvatarSelector,
  popupAddCardSelector,
  popupCardImageSelector,
  popupFormConfirmationSelector,
  userNameSelector,
  userAboutSelector,
  userAvatarSelector,
  buttonEdit,
  buttonAvatar,
  buttonAdd,
  formProfile,
  formAvatar,
  formCard,
  cardTemplateSelector,
  cardsContainerSelector
} from '../utils/constants.js';

let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'a7212cbe-3b54-4bb6-93d8-5cfe2a3625ad',
    'Content-Type': 'application/json'
  }
}); 

// делаем запрос на сервер
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userId = userData._id;

    //console.log(cardsContainer.renderItems(cards))

    //console.log(userInfo.setUserInfo(userData))

    userInfo.setUserInfo(userData); // получаем данные пользователя
    cardsContainer.renderItems(cards); // карточки
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })

  const handleOpenFormProfile = () => {
  const { name, about } = userInfo.getUserInfo();
  
  formProfile.name.value = name;
  formProfile.about.value = about;
  formProfileValidator.resetValidation();
  popupFormProfile.open();
};

const handleSubmitFormProfile = (userData) => {
  popupFormProfile.renderLoading(true);
  // обновляем данные о пользователе
  api.patchUserInfo(userData)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupFormProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupFormProfile.renderLoading(false);
    })
};

// Добавление карточек

const handleCardClick = (cardImageSrc, cardImageAlt) => {
  popupCardImage.open(cardImageSrc, cardImageAlt);
};

const createCard = (cardData) => {
  const card = new Card(
    cardData,
    userId,
    cardTemplateSelector,
    handleCardClick,
    { handleLikeClick: (cardId, isLiked) => {
        if (isLiked) {
          api.deleteLike(cardId)
            .then((cardData) => {
              card.deleteLike(cardData.likes);
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            })
        } else {
          api.putLike(cardId)
            .then((cardData) => {
              card.putLike(cardData.likes);
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            })
        }
      },
      handleDeleteClick: (cardId) => {
        popupFormConfirmation.open();
        popupFormConfirmation.handleSubmit(() => {
          api.deleteCard(cardId)
            .then(() => {
              card.deleteCard();
              popupFormConfirmation.close();
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            })
        })
      }
    },
  );
  const createdCard = card.generateCard();
  return createdCard;
};


const handleOpenFormCard = () => {
  formCardValidator.resetValidation();
  popupFormCard.open();
};
const handleSubmitFormCard = (cardData) => {
  popupFormCard.renderLoading(true);
  api.postCard(cardData)
    .then((cardData) => {
      cardsContainer.addItem(createCard(cardData));
      popupFormCard.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupFormCard.renderLoading(false);
    })
};

// Обновление аватара

const handleOpenFormAvatar = () => {
  formAvatarValidator.resetValidation();
  popupFormAvatar.open();
};

const handleSubmitFormAvatar = (userData) => {
  popupFormAvatar.renderLoading(true);
  api.patchAvatar(userData)
    .then((userData) => {
      userInfo.setUserAvatar(userData);
      popupFormAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupFormAvatar.renderLoading(false);
    })
};

//Для каждого попапа создавайте свой экземпляр класса PopupWithForm.

const userInfo = new UserInfo(userNameSelector, userAboutSelector, userAvatarSelector);
const cardsContainer = new Section({ renderer: createCard }, cardsContainerSelector);
const popupFormProfile = new PopupWithForm(popupEditProfileSelector, handleSubmitFormProfile);
const popupFormAvatar = new PopupWithForm(popupFormAvatarSelector, handleSubmitFormAvatar);
const popupFormConfirmation = new PopupWithСonfirmation(popupFormConfirmationSelector);
const popupFormCard = new PopupWithForm(popupAddCardSelector, handleSubmitFormCard);
const popupCardImage = new PopupWithImage(popupCardImageSelector);
const formProfileValidator = new FormValidator(validationOptions, formProfile);
const formCardValidator = new FormValidator(validationOptions, formCard);
const formAvatarValidator = new FormValidator(validationOptions, formAvatar); 

formProfileValidator.enableValidation();
formCardValidator.enableValidation();
formAvatarValidator.enableValidation();

buttonEdit.addEventListener('click', handleOpenFormProfile);
buttonAdd.addEventListener('click', handleOpenFormCard);
buttonAvatar.addEventListener('click',  handleOpenFormAvatar);

popupFormProfile.setEventListeners();
popupFormAvatar.setEventListeners();
popupFormConfirmation.setEventListeners();
popupFormCard.setEventListeners();
popupCardImage.setEventListeners();