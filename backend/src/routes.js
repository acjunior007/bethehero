
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routers = express.Router();

routers.post('/session', SessionController.create);

routers.get('/ongs', OngController.index);
routers.post("/ongs", OngController.create);

routers.get('/incidents', IncidentController.index);
routers.post("/incidents", IncidentController.create);
routers.delete('/incidents/:id', IncidentController.delete);

routers.get('/profile', ProfileController.index);

//routers.get('/', (req, res) => res.send({ evento: "Teste", aluno: "ac junior" }));

module.exports = routers;