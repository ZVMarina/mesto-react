function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <img className="card__image" src={props.card.link} onClick={handleClick} alt={props.card.name}/>
            <div className="card__container">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-container">
                    <button className="card__button card__button_type_delete" type="button"
                        aria-label="Удалить карточку"></button>
                    <button className="card__button card__button_type_like" type="button"
                        aria-label="Поставить лайк"></button>
                    <span className="card__like-counter">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;