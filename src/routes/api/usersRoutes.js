const {Router} = require('express');
const auth = require("../../middlewares/auth");
const isAccess = require("../../middlewares/checkPermission");
const usersController = require('../../controllers/usersController');
const commanConstanmts = require('../../constants/comman');
const usersRoutes = Router();
const swaggerUiExpress = require("swagger-ui-express");
const swaggerUi = require("swagger-ui-express");

usersRoutes.post('/getCustomersList', auth, isAccess(commanConstanmts.PERMISSIONS.CUSTOMER_LIST), usersController.getCustomersList);
usersRoutes.post('/createItem', auth, isAccess(commanConstanmts.PERMISSIONS.CREATE_ITEM), usersController.createItem);
usersRoutes.delete('/deleteItem/:id', auth, isAccess(commanConstanmts.PERMISSIONS.DELETE_ITEM), usersController.deleteItem);
usersRoutes.get('/getItemById/:id', auth, isAccess(commanConstanmts.PERMISSIONS.GET_ITEM_DETAIL), usersController.getItemById);
usersRoutes.post('/getItems', auth, usersController.getItems);
usersRoutes.post('/login', usersController.doLogin);

module.exports = usersRoutes;