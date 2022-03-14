import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
    return (
        <div className="App">

            <div className="page">
                <Header />
                <Main />
                <Footer />
                <PopupWithForm
                    name="edit-info"
                    title="Редактировать профиль"
                >
                    <input id="name-input" type="text" className="form__input form__input_value_name" name="name"
                        minlength="2" maxlength="40" required />
                    <span className="name-input-error form__input-error"></span>
                    <input id="job-input" type="text" className="form__input form__input_value_job" name="job" minlength="2"
                        maxlength="200" required />
                    <span className="job-input-error form__input-error"></span>
                </PopupWithForm>

                <PopupWithForm
                    name="add-card"
                    title="Новое место"
                >
                    <input id="place-input" type="text" className="form__input form__input_value_place" name="name"
                        placeholder="Название" minlength="2" maxlength="30" required />
                    <span className="place-input-error form__input-error"></span>
                    <input id="url-input" type="url" className="form__input form__input_value_link" name="link"
                        placeholder="Ссылка на картинку" required />
                    <span className="url-input-error form__input-error"></span>
                </PopupWithForm>

                <PopupWithForm
                    name="change-avatar"
                    title="Обновить аватар"
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
