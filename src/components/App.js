import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

const App = () => {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }, [])

  React.useEffect(() => {
    api.getCards()
      .then(((cards) => {
        setCards(cards);
      }))
      .catch((error) => {
        console.log('error: ', error);
      })
  }, [])

  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  }

  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleUpdateUser = ({ name, about }) => {
    api.changeProfile(name, about)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }

  const handleUpdateAvatar = ({ avatar }) => {
    api.changeAvatar(avatar)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((error) => {
        console.log('error: ', error);
      })
  }

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.addNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
  }

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cardState) => cardState.map((item) => item._id === card._id ? newCard : item));
      });
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cardState) => cardState.filter((item) => item._id !== card._id));
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditAvatar={onEditAvatar}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          closeAllPopups={closeAllPopups}
          onCardClick={handleCardClick}
          currentUser={currentUser}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
        >
          <button className="popup__main-button" type="submit">Да</button>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
