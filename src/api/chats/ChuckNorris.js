class ChuckNorris {
    static ROOT_URI = 'https://api.chucknorris.io/jokes/random'

    static getMessages() {
        return fetch(`${this.ROOT_URI}`).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can't get list");
        })
    }
}

export default ChuckNorris;