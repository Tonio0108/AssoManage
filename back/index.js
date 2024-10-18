// index.js
import express from "express";
import routes from "./Routes/routes.js";
import cors from 'cors'; // Importer CORS

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173', // Autoriser seulement ton frontend React
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Utilisation des routes
app.use('/api', routes); // Préfixe '/api' pour les routes

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
