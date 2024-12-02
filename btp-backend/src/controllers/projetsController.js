const projets = require('../data/projets.json');

// Obtenir tous les projets
exports.getAllProjets = (req, res) => {
  res.json(projets);
};

// Obtenir un projet par son ID
exports.getProjetById = (req, res) => {
  const id = parseInt(req.params.id, 10); // Récupérer l'ID depuis les paramètres
  const projet = projets.find((p) => p.id === id); // Trouver le projet correspondant
  if (projet) {
    res.json(projet); // Retourner le projet si trouvé
  } else {
    res.status(404).json({ message: "Projet non trouvé" }); // Retourner une erreur si l'ID est introuvable
  }
};

