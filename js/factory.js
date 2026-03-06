/*
La factory est une classe sans constructeur qui renvoi un objet composé de plusieurs objet différents

*/
loaded(function(){
    /* Classes Employés */
    class Employe{
        constructor(nom, prenom){
            this.nom = nom;
            this.prenom = prenom;
            this.role = 'Employé';
            this.authReseau = 'Utilisateur';
            this.parking = 'Aucun';
        }
    }

    class Formateur extends Employe{
        constructor(nom, prenom){
            super(nom, prenom);
            this.role = 'Formateur';
            this.authReseau = 'Utilisateur Formateur';
            this.parking = 'Aucun';
        }
    }
    
    class Manager extends Employe{
        constructor(nom, prenom){
            super(nom, prenom);
            this.role = 'Manager';
            this.authReseau = 'Super Utilisateur';
            this.parking = 'Oui';
        }
    }
    
    class Rh extends Employe{
        constructor(nom, prenom){
            super(nom, prenom);
            this.role = 'RH';
            this.authReseau = 'Utilisateur Ressources';
            this.parking = 'Oui';
        }
    }

    /*
    la factory va être invoquée quand on voudra créer un utilisateur,
    elle s'appuiera sur les classes Employe et ses classes filles pour définir certains aspects
    la factory va créer l'utilisateur selon le role attribué
    */

    class UtilisateurFactory{
        /*
        Une factory ne possède pas de constructeur, en revanche elle utilisera le constructeur de la classe appelée pour créer l'objet
        */
        
        static creerUtilisateur(nom, prenom, email, tel, ville, pays, role = ''){
            /*
            Pour créer un utilisateur :
            UtilisateurFactory.CreerUtilisateur('Duflot', 'Nicolas', 'nduflot@dawan.fr', '0123456789', 'Lille', 'France', 'Formateur');
            */

            const info = {
                nom: nom,
                prenom: prenom,
                email: email,
                tel: tel,
                role: role
            };

            const localisation = {
                ville: ville,
                pays: pays
            };

            const user = {
                login: email,
                motdepasse: ''
            };

            const methodes = {
                enregistrerHeures: function(nbHeures){
                    return `${this.nom} ${this.prenom} enregistre ${nbHeures} heure(s)`;
                }
            };

            let reponse = null;
            switch(role){
                case 'Manager':
                    reponse = new Manager(nom, prenom);
                break;
                case 'Formateur':
                    reponse = new Formateur(nom, prenom);
                    break;
                case 'RH':
                    reponse = new Rh(nom, prenom);
                break;
                default:
                    reponse = new Employe(nom, prenom);
            }

            /*
            reponse contient maintenant une instance de la classe Employe ou d'une de ses classes filles
            On va maintenant créer l'utilisateur en assemblant la réponse aux objets litéraux créés précédemment
            */

            Object.assign(user, info, localisation, user, methodes, reponse);
            return user;
        }
        
        static changeRole(user, role){
            const newUser = this.creerUtilisateur(user.nom, user.prenom, user.email, user.tel, user.ville, user.pays, role);
            return newUser;
        }
    }

    let nDuflot = UtilisateurFactory.creerUtilisateur('Duflot', 'Nicolas', 'nduflot@dawan.fr', '0123456789', 'Lille', 'France', 'Formateur');
    let aStarck = UtilisateurFactory.creerUtilisateur('Starck', 'Aria', 'aStarck@dawan.fr', '9876543210', 'Le Nord', 'Westeros', 'Rh');
    let hHodor = UtilisateurFactory.creerUtilisateur('Hodor', 'Hodor', 'hHodor@dawan.fr', '4080875105', 'Le Nord', 'Westeros', 'Employé');


    console.log(nDuflot);
    console.log(aStarck);
    console.log(hHodor);
    hHodor.prenom = 'Toto';
    hHodor = UtilisateurFactory.changeRole(hHodor, 'Manager');
    console.log(hHodor);

    console.log(hHodor.enregistrerHeures(6));
    
    
});