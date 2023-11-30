function Utilisateur(noms, email, ...amis) {
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

function Admin(...parms){
    Utilisateur.apply(this, parms);
}

Utilisateur.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
}

Admin.prototype = Object.create(Utilisateur.prototype);

Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs = utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email;
    });
}

const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Alice', 'Grace');
const util2 = new Utilisateur('Blaise Juu', 'blaise@gmail.com', 'Plamedi');
const admin = new Admin('Chance Js', 'chance@gmail.com', 'Gorge', 'Daruis');

let utilisateurs = [util1, util2, admin];

console.log(utilisateurs);

admin.supprimerUtilisateur(util1);
console.log(utilisateurs);