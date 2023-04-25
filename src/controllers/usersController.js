const { Router } = require('express');
const HttpStatus = require('http-status-codes');
const jwt = require("jsonwebtoken");
const usersService = require('../services/usersService');
const { logger } = require('../utils/logger');	
const commanConstanmts = require('../constants/comman');

const knexJs = require('knex');
const knexConfig = require('../knexfile');

const knex = knexJs(knexConfig);

// const flightsDetailModelObj = new FlightsDetailModel();

/**
 * Do login check.
 *
 * @param  {Object} req Request.
 * @param  {Object} res Response.
 * @param  {Object} next Next request.
 */
exports.doLogin = (req, res, next) => {
  let email = req.body.user_email;
  let password = req.body.user_password;
  const isDELETED = commanConstanmts.IS_DELETED_NO;
  let whereData = { 'user_email': email, 'password': password, 'is_deleted': isDELETED };

  knex('users')
    .select("*")
    .where(whereData)
    .then( function (user) {
        const token = jwt.sign(
        { user_id: user[0].id, role_id: user[0].role_id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

                    const response = {};
                    response.token = token;
                    response.user_fullname = user[0].first_name +' '+user[0].last_name;
                    response.role = user[0].role_id;
         res.json({"code":HttpStatus.OK, "result" : response});
     }).catch(function(err){console.log(err);
                            logger.error(err);
                            res.json({"code":HttpStatus.INTERNAL_SERVER_ERROR, "message" : "User not exist"});
                        });
};


/**
 * Get customers
 */
exports.getCustomersList = (req, res, next) => {
  usersService
    .getCustomersList(req.body)
     .then(data => res.json({"code":HttpStatus.OK, "total":data.pagination.total, "currentPage":data.pagination.currentPage, "result" :data.data}))
        .catch(err => next(err));
};

/**
 * Create item
 */
exports.createItem = (req, res, next) => {
    let data = req.body;
   
	knex('item').insert(data)
	  .then( function (result) {
	       res.json({"code":HttpStatus.CREATED, "message" : 'Data Submitted Successfully'});
	   }).catch(function(err){
                            logger.error(err);
                            res.json({"code":HttpStatus.INTERNAL_SERVER_ERROR, "message" : "Something went wrong"});
                        });
};

/**
 * Get Bookings
 */
exports.getItems = (req, res, next) => {
  usersService
    .getItems(req.body)
     .then(data => res.json({"code":HttpStatus.OK, "total":data.pagination.total, "currentPage":data.pagination.currentPage, "result" :data.data}))
        .catch(err => next(err));
};


/**
 * Delete item by id.
 *
 * @param  {Object} req Request.
 * @param  {Object} res Response.
 * @param  {Object} next Next request.
 */
exports.deleteItem = (req, res, next) => {
  const isDELETED = commanConstanmts.IS_DELETED_YES;
  let properties = { 'deleted_by':'0', 'is_deleted': isDELETED };
  let whereData = { 'id': req.params.id };

  knex('item')
    .update(properties)
    .where(whereData)
    .then( function (result) {
         res.json({"code":HttpStatus.OK, "message" : 'Item Deleted Successfully'});
     }).catch(function(err){
                            logger.error(err);
                            res.json({"code":HttpStatus.INTERNAL_SERVER_ERROR, "message" : "Something went wrong"});
                        });
};

/**
 * Get item by id.
 *
 * @param  {Object} req Request.
 * @param  {Object} res Response.
 * @param  {Object} next Next request.
 */
exports.getItemById = (req, res, next) => {
  const isDELETED = commanConstanmts.IS_DELETED_NO;
  let whereData = { 'id': req.params.id, 'is_deleted': isDELETED };

  knex('item')
    .select("*")
    .where(whereData)
    .first()
    .then( function (result) {
         res.json({"code":HttpStatus.OK, "result" : result});
     }).catch(function(err){
                            logger.error(err);
                            res.json({"code":HttpStatus.INTERNAL_SERVER_ERROR, "message" : "Something went wrong"});
                        });
};