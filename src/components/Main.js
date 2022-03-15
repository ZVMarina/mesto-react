import { render } from "@testing-library/react";
import React from "react";
import { api } from "../utils/Api";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserAvatar(res.avatar);
                setUserDescription(res.about);
                setUserName(res.name);
            })

        api.getCards()
            .then(((cards) => {
                setCards(cards);
            }))
    })

    return (
        <main className="content" >
            <section className="profile section">
                <div className="profile__container">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements section" aria-label="Фото-карточки мест, где я был">
                <ul className="elements__cards">
                    {cards.map((card, i) => (
                        <li className="card" key={card._id}>
                        <img className="card__image" src={card.link}/>
                            <div className="card__container">
                                <h2 className="card__title">{card.name}</h2>
                                <div className="card__like-container">
                                    <button className="card__button card__button_type_delete" type="button"
                                        aria-label="Удалить карточку"></button>
                                    <button className="card__button card__button_type_like" type="button"
                                        aria-label="Поставить лайк"></button>
                                    <span className="card__like-counter">{card.likes.length}</span>
                                </div>
                            </div>
                    </li>
                    ))}
                </ul>
            </section>
        </main >
    )
}

export default Main;