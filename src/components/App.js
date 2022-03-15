import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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
    }

    return (
        <div className="App">

            <div className="page">
                <Header />
                <Main
                    onEditAvatar={onEditAvatar}
                    onEditProfile={onEditProfile}
                    onAddPlace={onAddPlace}
                    closeAllPopups={closeAllPopups}
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

                <ImagePopup />

                <PopupWithForm
                    name="confirm"
                    title="Вы уверены?"
                >
                    <button className="popup__main-button" type="submit">Да</button>
                </PopupWithForm>
            </div>

            <template className="cards-template">
                <li className="card">
                    <img className="card__image" />
                    <div className="card__container">
                        <h2 className="card__title"></h2>
                        <div className="card__like-container">
                            <button className="card__button card__button_type_delete" type="button"
                                aria-label="Удалить карточку"></button>
                            <button className="card__button card__button_type_like" type="button"
                                aria-label="Поставить лайк"></button>
                            <span className="card__like-counter"></span>
                        </div>
                    </div>
                </li>
            </template>



        </div>
    );
}

export default App;
