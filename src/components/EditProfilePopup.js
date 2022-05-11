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

  return (
    <PopupWithForm
      name="edit-info"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="form__input form__input_value_name"
        id="name-input"
        type="text"
        name="name"
        value={name}
        minLength="2" maxLength="40" required
      />
      <span className="name-input-error form__input-error"></span>
      <input
        className="form__input form__input_value_job"
        id="job-input"
        type="text"
        name="job"
        value={description}
        minLength="2" maxLength="200" required
      />
      <span className="job-input-error form__input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
