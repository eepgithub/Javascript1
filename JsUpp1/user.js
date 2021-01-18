export default class User {
    constructor(firstname, lastname, adress, city, zipcode, email) {
        this.firstName = firstname
        this.lastName = lastname
        this.adress = adress
        this.city = city
        this.zipcode = zipcode
        this.email = email
        this.id = Date.now().toString()
    }
    
    get displayName() {
        return `${this.firstName} ${this.lastName}`
    }
    
}