import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarRef = React.useRef();

  const handleChangeAvatar = (evt) => {
    avatarRef.current.value = evt.target.value;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        id="profile-input"
        type="url"
        className="form__input form__input_value_link"
        name="link"
        placeholder="Ссылка на аватар"
        required
        onChange={handleChangeAvatar}
      />
      <span className="profile-input-error form__input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
