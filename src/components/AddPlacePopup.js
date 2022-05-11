import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const placeNameRef = React.useRef();
  const placeLinkRef = React.useRef();

  const handleChangePlaceName = (evt) => {
    placeNameRef.current.value = evt.target.value;
  }

  const handleChangePlaceLink = (evt) => {
    placeLinkRef.current.value = evt.target.value;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    props.onAddPlace({
      name: placeNameRef.current.value,
      link: placeLinkRef.current.value,
    })
  }

  useEffect(() => {
    placeNameRef.current.value = '';
    placeLinkRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={placeNameRef}
        id="place-input"
        type="text"
        className="form__input form__input_value_place"
        name="name"
        placeholder="Название"
        minLength="2" maxLength="30" required
        onChange={handleChangePlaceName}
      />
      <span className="place-input-error form__input-error"></span>
      <input
        ref={placeLinkRef}
        id="url-input"
        type="url"
        className="form__input form__input_value_link"
        name="link"
        placeholder="Ссылка на картинку" required
        onChange={handleChangePlaceLink}
      />
      <span className="url-input-error form__input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
