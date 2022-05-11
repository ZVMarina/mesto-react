import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [cards, setCards] = React.useState([]);

  // Подписали компонент на CurrentUserContext и получили значение контекста - объект текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCards()
      .then(((cards) => {
        setCards(cards);
      }))
      .catch((error) => {
        console.log('error: ', error);
      })
  }, [])

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cardState) => cardState.map((card) => card._id === card._id ? newCard : card));
      });
  }

  return (
    <main className="content" >
      <section className="profile section">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img src={currentUser?.avatar} alt="Аватарка" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser?.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p className="profile__subtitle">{currentUser?.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements section" aria-label="Фото-карточки мест, где я был">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main >
  )
}

export default Main;
