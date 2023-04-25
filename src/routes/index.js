const Router = require('express');
const usersRoutes = require('./api');

const Routes = Router();

Routes.use('/api', usersRoutes); 

module.exports = Routes;