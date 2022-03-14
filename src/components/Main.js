function Main(props) {
    return (
        <main className="content">
            <section className="profile section">
                <div className="profile__container">
                    <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                        <img src="<%=require('./images/profile/avatar.jpg')%>" alt="Аватарка" className="profile__avatar" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">Марина</h1>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                        <p className="profile__subtitle">Кошечка</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements section" aria-label="Фото-карточки мест, где я был">
                <ul className="elements__cards">

                </ul>
            </section>
        </main>
    )
}

export default Main;