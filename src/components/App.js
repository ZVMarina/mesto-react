import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function onEditAvatar() {
        setIsEditAvatarPopupOpen(true);
    }

    function onEditProfile() {
        setIsEditProfilePopupOpen(true);
    }

    function onAddPlace() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={onEditAvatar}
                    onEditProfile={onEditProfile}
                    onAddPlace={onAddPlace}
                    closeAllPopups={closeAllPopups}
                    onCardClick={handleCardClick}
                />
                <Footer />
                <PopupWithForm
                    name="edit-info"
                    title="Редактировать профиль"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input id="name-input" type="text" className="form__input form__input_value_name" name="name"
                        minLength="2" maxLength="40" required />
                    <span className="name-input-error form__input-error"></span>
                    <input id="job-input" type="text" className="form__input form__input_value_job" name="job" minLength="2"
                        maxLength="200" required />
                    <span className="job-input-error form__input-error"></span>
                </PopupWithForm>

                <PopupWithForm
                    name="add-card"
                    title="Новое место"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input id="place-input" type="text" className="form__input form__input_value_place" name="name"
                        placeholder="Название" minLength="2" maxLength="30" required />
                    <span className="place-input-error form__input-error"></span>
                    <input id="url-input" type="url" className="form__input form__input_value_link" name="link"
                        placeholder="Ссылка на картинку" required />
                    <span className="url-input-error form__input-error"></span>
                </PopupWithForm>

                <PopupWithForm
                    name="change-avatar"
                    title="Обновить аватар"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <input id="profile-input" type="url" className="form__input form__input_value_link" name="link"
                        placeholder="Ссылка на аватар" required />
                    <span className="profile-input-error form__input-error"></span>
                </PopupWithForm>

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
    );
}

export default App;
