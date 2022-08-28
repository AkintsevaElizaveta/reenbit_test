function ChatsHeader({user, isUserOnline}){
    return(
        <div className="chats__header">
            <div className={isUserOnline ? "contacts__photo_container" : "contacts__photo_container_isNotOnline" }>
                <img src={`${user.photo}`} className="contacts__photo"/>
            </div>
            <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
    )
}

export default ChatsHeader;