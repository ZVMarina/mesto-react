import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from "./PopupWithForm"

const EditProfilePopup = (props) => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (evt) => {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-info"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input_value_name"
        id="name-input"
        type="text"
        name="name"
        value={name}
        onChange={handleChangeName}
        minLength="2" maxLength="40" required
      />
      <span className="name-input-error form__input-error"></span>
      <input
        className="form__input form__input_value_job"
        id="job-input"
        type="text"
        name="job"
        value={description}
        onChange={handleChangeDescription}
        minLength="2" maxLength="200" required
      />
      <span className="job-input-error form__input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
