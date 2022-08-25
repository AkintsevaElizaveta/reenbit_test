function ChatsHeader({user}){
    return(
        <div className="chats__header">
            <div className="contacts__photo_container">
                <img src={`${user.photo}`} className="contacts__photo"/>
            </div>
            <p>{`${user.name} ${user.lastName}`}</p>
        </div>
    )
}

export default ChatsHeader;