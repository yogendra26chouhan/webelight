const HttpStatus = require('http-status-codes');
const usersService = require('../services/usersService');
const { logger } = require('../utils/logger');

const knexJs = require('knex');
const knexConfig = require('../knexfile');

const knex = knexJs(knexConfig);

/**
 * Validate check route is accessable or not.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @returns {Promise}
 */
 const isAccess = function(permission){
    
    return (req, res, next) => {
        let userRole = req.user.role_id;
    	
        let user = knex.table('role_permissions')
                      .select("*")
                      .where({
                          is_deleted : 2,
                          permission_id : permission,
                          role_id: userRole
                      });

            return  user.then(dataObj => {
                          if (dataObj.length === 0) {
                            return res.json({"code":HttpStatus.UNAUTHORIZED, "message" : "You don't have a access for this route"});
                          }

                          next();
                        });
    }
}

module.exports = isAccess;