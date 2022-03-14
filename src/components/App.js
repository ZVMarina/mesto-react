import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';

function App() {
  return (
    <div className="App">

      <div className="page">
        <Header />
        <Main />
        <Footer />

        <div className="popup popup_type_edit-info">
            <div className="popup__container">
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="form form_type_profile" name="user-info" novalidate>
                    <input id="name-input" type="text" className="form__input form__input_value_name" name="name"
                        minlength="2" maxlength="40" required />
                    <span className="name-input-error form__input-error"></span>
                    <input id="job-input" type="text" className="form__input form__input_value_job" name="job" minlength="2"
                        maxlength="200" required />
                    <span className="job-input-error form__input-error"></span>
                    <button className="form__main-button form__main-button_place_profile" type="submit">Сохранить</button>
                </form>
                <button className="popup__close-button popup__close-button_place_profile" type="button"
                    aria-label="Закрыть"></button>
            </div>
        </div>

        <div className="popup popup_type_add-card">
            <div className="popup__container">
                <h2 className="popup__title">Новое место</h2>
                <form className="form form_type_new-card" name="add-place">
                    <input id="place-input" type="text" className="form__input form__input_value_place" name="name"
                        placeholder="Название" minlength="2" maxlength="30" required />
                    <span className="place-input-error form__input-error"></span>
                    <input id="url-input" type="url" className="form__input form__input_value_link" name="link"
                        placeholder="Ссылка на картинку" required />
                    <span className="url-input-error form__input-error"></span>
                    <button className="form__main-button form__main-button_place_new-card" type="submit">Создать</button>
                </form>
                <button className="popup__close-button popup__close-button_place_new-card" type="button"
                    aria-label="Закрыть"></button>
            </div>
        </div>

        <div className="popup popup_type_change-avatar">
            <div className="popup__container">
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="form form_type_change-avatar" name="change-avatar">
                    <input id="profile-input" type="url" className="form__input form__input_value_link" name="link"
                        placeholder="Ссылка на аватар" required />
                    <span className="profile-input-error form__input-error"></span>
                    <button className="form__main-button form__main-button_place_change-avatar" type="submit">Сохранить</button>
                </form>
                <button className="popup__close-button popup__close-button_place_change-avatar" type="button"
                    aria-label="Закрыть"></button>
            </div>
        </div>

        <div className="popup popup_type_view-image">
            <div className="popup__container popup__container_type_image">
                <button className="popup__close-button popup__close-button_place_image" type="button"
                    aria-label="Закрыть"></button>
                <img src="<%=require('./images/elements/1.jpg')%>" alt="Фото карточки" className="popup__image" />
                <h2 className="popup__image-title">Название места</h2>
            </div>
        </div>

        <div className="popup popup_type_confirm">
            <div className="popup__container">
                <h2 className="popup__title">Вы уверены?</h2>
                <button className="popup__main-button" type="submit">Да</button>
                <button className="popup__close-button popup__close-button_place_confirm" type="button"
                    aria-label="Закрыть"></button>
            </div>
        </div>
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
