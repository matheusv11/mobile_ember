//Imports
const express= require('express')
const routes= express.Router();
const path= require('path')
const multer= require('multer');
const multer_config= require('./configs/multer')

//Controllers
const UserController= require('./controllers/UserController');
const ContentController= require('./controllers/ContentController');
const AuthController= require('./controllers/AuthController');
const ProfileController= require('./controllers/ProfileController');

//Rotas

routes.use('/files', express.static(path.resolve(__dirname, './images')))

routes.get('/users', UserController.index);
routes.post('/users', multer(multer_config).single('file'), UserController.create);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.get('/contents', ContentController.index);
routes.post('/contents', multer(multer_config).single('file'),ContentController.create);
routes.put('/contents', ContentController.update);
routes.delete('/contents', ContentController.delete);

routes.post('/auth', AuthController.create);

routes.get('/profile', ProfileController.index);

module.exports= routes;
