function ImagePopup() {
    return (
        <div className="popup popup_type_view-image">
            <div className="popup__container popup__container_type_image">
                <button className="popup__close-button popup__close-button_place_image" type="button"
                    aria-label="Закрыть"></button>
                <img src="<%=require('./images/elements/1.jpg')%>" alt="Фото карточки" className="popup__image" />
                <h2 className="popup__image-title">Название места</h2>
            </div>
        </div>
    )
}

export default ImagePopup;