import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarInpurRef = React.useRef();

  const handleChangeAvatar = (evt) => {
    avatarInpurRef.current.value = evt.target.value;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInpurRef.current.value,
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
        ref={avatarInpurRef}
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
