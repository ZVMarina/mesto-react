import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {
  const currentUser = React.useContext(CurrentUserContext);

  // Проверяем, является ли текущий пользователь владельцем карточки
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__button card__button_type_delete ${isOwn ? 'card__button_visible' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__button card__button_type_like ${isLiked ? 'card__button_active' : ''}`
  );

  const handleCardClick = () => {
    props.onCardClick(props.card);
  }

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  }

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.card.link}
        onClick={handleCardClick}
        alt={props.card.name} />
      <div className="card__container">
        <h2 className="card__title">
          {props.card.name}
        </h2>
        <div className="card__like-container">
          <button
            className={cardDeleteButtonClassName}
            type="button"
            aria-label="Удалить карточку"
            onClick={handleDeleteClick}>
          </button>
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Поставить лайк">
          </button>
          <span className="card__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  )
}

export default Card;
