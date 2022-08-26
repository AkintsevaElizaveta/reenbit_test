class ContactApi{
    static ROOT_URI = 'https://chatapp20220826094633.azurewebsites.net/Users'

    static getContacts() {
        return fetch(this.ROOT_URI,{
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => {
            if (res.ok) {
                return res.json();
            }

            throw new Error("Can't get list");
        })
    }
}

export default ContactApi;