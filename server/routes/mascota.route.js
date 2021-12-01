const MascotaController = require('../controllers/mascota.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/pets', authenticate, MascotaController.list);
    app.get('/api/pets/user', authenticate, MascotaController.listUserMascotas);
    app.get('/api/pets/:id', authenticate, MascotaController.get);
    app.post('/api/pets', authenticate, MascotaController.create);
    app.put('/api/pets/:id', authenticate, MascotaController.edit);
    app.delete('/api/pets/:id', authenticate, MascotaController.del);
}