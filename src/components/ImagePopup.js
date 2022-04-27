function ImagePopup(props) {
    return (
        <div className={'popup popup_type_view-image ' + `${props.card.link ? 'popup_open' : ''}`}>
            <div className="popup__container popup__container_type_image">
                <button className="popup__close-button popup__close-button_place_image" type="button"
                    aria-label="Закрыть" onClick={props.onClose}></button>
                <img src={props.card.link} alt={props.card.name} className="popup__image" />
                <h2 className="popup__image-title">{props.card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;