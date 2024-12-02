const fs = require('fs');
const path = require('path');

// Chemin vers le fichier contact.json
const contactFilePath = path.join(__dirname, '../data/contact.json');

// Contrôleur pour gérer les requêtes POST pour le formulaire de contact
const saveContactMessage = (req, res) => {
    const { name, email, phone, projectType, message } = req.body;

    // Validation des données
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires.' });
    }

    // Lire le fichier contact.json
    fs.readFile(contactFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier :", err);
            return res.status(500).json({ error: 'Erreur serveur.' });
        }

        // Ajouter le nouveau message au fichier existant
        const contacts = data ? JSON.parse(data) : [];
        const newContact = { id: Date.now(), name, email, phone, projectType, message };
        contacts.push(newContact);

        // Enregistrer dans le fichier contact.json
        fs.writeFile(contactFilePath, JSON.stringify(contacts, null, 2), (writeErr) => {
            if (writeErr) {
                console.error("Erreur lors de l'écriture du fichier :", writeErr);
                return res.status(500).json({ error: 'Erreur serveur.' });
            }

            // Réponse en cas de succès
            res.status(201).json({ message: 'Votre message a été enregistré avec succès.', contact: newContact });
        });
    });
};

module.exports = {
    saveContactMessage
};
