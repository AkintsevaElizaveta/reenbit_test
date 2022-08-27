import ChuckNorris from "./ChuckNorris";

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

    static sendMessage(message){
            return fetch(this.ROOT_URI, {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`error`);
            });
    }
}

export default ChatsApi;