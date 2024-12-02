const express = require('express');
const cors = require('cors');
const path = require('path');
const projetsRoutes = require('./routes/projetsRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Utilisation des routes
app.use('/api/projets', projetsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/contact', contactRoutes); // Intégration des routes de contact

// Serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
