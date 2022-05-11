import React from 'react';
import PopupWithForm from "./PopupWithForm"

const EditProfilePopup = (props) => {
  return (
    <PopupWithForm
      name="edit-info"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input id="name-input" type="text" className="form__input form__input_value_name" name="name"
        minLength="2" maxLength="40" required />
      <span className="name-input-error form__input-error"></span>
      <input id="job-input" type="text" className="form__input form__input_value_job" name="job" minLength="2"
        maxLength="200" required />
      <span className="job-input-error form__input-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
