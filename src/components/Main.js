import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  // Подписали компонент на CurrentUserContext и получили значение контекста - объект текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content" >
      <section className="profile section">
        <div className="profile__container">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatar}
          >
            <img src={currentUser?.avatar} alt="Аватарка" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser?.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}>
            </button>
            <p className="profile__subtitle">{currentUser?.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить карточку"
          onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="elements section" aria-label="Фото-карточки мест, где я был">
        <ul className="elements__cards">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main >
  )
}

export default Main;
