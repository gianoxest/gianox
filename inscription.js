document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const username = document.getElementById('username').value.trim();
        const firstname = document.getElementById('firstname').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const city = document.getElementById('city').value.trim();
        const zipcode = document.getElementById('zipcode').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const birthdate = document.getElementById('birthdate').value.trim();

        // Générer la date de création du compte
        const currentDate = new Date();
        const creationDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

        // Construire la ligne à écrire dans le fichier connexion.txt
        const newEntry = `${generateUniqueId()} : ${username},${firstname},${lastname},${email},${password},${city},${zipcode},${phone},${birthdate},${creationDate}`;

        // Appel à une fonction pour écrire dans le fichier connexion.txt
        writeToConnectionFile(newEntry);

        // Réinitialiser le formulaire après soumission
        registerForm.reset();

        // Informer l'utilisateur que l'inscription a réussi (exemple)
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
    });

    // Fonction pour générer un identifiant unique pour chaque inscription
    function generateUniqueId() {
        // Ici, vous pouvez implémenter votre propre méthode de génération d'identifiant unique,
        // comme l'incrémentation d'un compteur, l'utilisation d'un timestamp, etc.
        // Pour cet exemple, je vais simplement générer un identifiant aléatoire.
        return Math.floor(Math.random() * 1000); // Génère un nombre aléatoire entre 0 et 999
    }

    // Fonction pour écrire dans le fichier connexion.txt
    function writeToConnectionFile(entry) {
        // Utilisation de fetch pour envoyer une requête POST à un serveur, mais adapté à l'environnement local
        // Cette fonctionnalité nécessite normalement un serveur avec une API pour gérer les fichiers
        // Comme nous sommes en local, nous allons simuler cette fonctionnalité avec console.log().
        console.log('Nouvelle inscription:', entry);
        // Vous pouvez adapter cette fonction pour écrire réellement dans un fichier texte.
        // Exemple de code pour enregistrer dans un fichier via Node.js :
        /*
        const fs = require('fs');
        fs.appendFile('connexion.txt', entry + '\n', (err) => {
            if (err) throw err;
            console.log('Enregistrement effectué !');
        });
        */
    }
});
