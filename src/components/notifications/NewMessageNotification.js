import React from "react";

function NewMessageNotification({user, onClose}) {
    return (
        <div className="message_notification_root">
            <div className="message_notification_modal">
                <button className="message_notification_btn" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                <div className="message_notification_header">
                    <img className="contacts__photo contacts__photo_notification" src={user.photo}/>
                    <span className="message_notification_userName">{user.firstName}</span>
                </div>
                <p className="contacts__message contacts__message_notification">{user.lastMessage}</p>
            </div>
        </div>
    )
}

export default NewMessageNotification;