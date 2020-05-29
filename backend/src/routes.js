const routes= require('express').Router();

const UserController= require('./controllers/UserController');
const ContentController= require('./controllers/ContentController');

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.get('/contents', ContentController.index);
routes.post('/contents', ContentController.create);
routes.put('/contents', ContentController.update);
routes.delete('/contents', ContentController.delete);

module.exports= routes;