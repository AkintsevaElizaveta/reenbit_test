class ChatsApi{
    static ROOT_URI = 'https://chatapp20220826094633.azurewebsites.net/Messages'

    static getMessages(userId) {
        return fetch(`${this.ROOT_URI}/${userId}`).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can't get list");
        })
    }
}

export default ChatsApi;