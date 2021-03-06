const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">
          {props.title}
        </h2>
        <form
          className={`form form_type_${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="form__main-button" type="submit">Сохранить</button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}>
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm;
