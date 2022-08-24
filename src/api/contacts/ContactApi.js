class ContactApi{
    static ROOT_URI = 'https://62e3d1843c89b95396d11a75.mockapi.io/contacts'

    static getContacts() {
        return fetch(this.ROOT_URI).then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can't get list");
        })
    }
}

export default ContactApi;