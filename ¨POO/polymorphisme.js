class User {
    constructor(noms){
        this.noms = noms;
    }
    login(){
        console.log(`${this.noms} connecté entant qu'utilisateur`);
    }
}

class Admin extends User {
    login(){
        super.login();
        console.log(`${this.noms} connecté entant qu'admin`);
    }
}

const user1 = new User('Moustapha BA');
const admin = new Admin('Awa BA');
user1.login();
admin.login();
console.log(user1);