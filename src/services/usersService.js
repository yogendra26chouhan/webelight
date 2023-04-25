const UsersModel = require('../models/UsersModel');
const knexJs = require('knex');
const knexConfig = require('../knexfile');
const { logger } = require('../utils/logger');
const commanConstanmts = require('../constants/comman');
const knex = knexJs(knexConfig);
const { attachPaginate } = require('knex-paginate');
attachPaginate();

/**
 * Get all flights.
 *
 * @return {Promise}
 */

 module.exports.getCustomersList = function (query) {
  let userRole = query.role;
  let page = parseInt(query.page);
  let pagesize = parseInt(query.pagesize);
  
  let queryLog = knex.table('users')
                      .select("*")
                      .where({
                          is_deleted : 2,
                          role_id: userRole
                      });

              
        return queryLog = queryLog.paginate({ perPage: pagesize, currentPage: page }).then(result => {
        	                            return result;
                                    }).catch(function(err){
                                        logger.error(err);
                                    });
}

module.exports.getItems = function (query) {
  let page = parseInt(query.page);
  let pagesize = parseInt(query.pagesize);
  let category_id = query.category_id != '' ? query.category_id : '';
  let product_name = query.product_name != '' ? query.product_name : '';

  let queryLog = knex.table('item')
                      .select("item.*", "product.title as product_title", "product_category.category_id", "category.title as categry_title")
                      .leftJoin("product_category", 'item.product_id', '=', 'product_category.id')
                      .leftJoin("category", 'product_category.category_id', '=', 'category.id')
                      .leftJoin("product", 'product_category.product_id', '=', 'product.id')
                      .where({
                         "item.is_deleted" : 2
                      });  

                      if(category_id != ''){
                        queryLog = queryLog.where('category.id', category_id);
                      }
                      if(product_name != ''){
                        queryLog = queryLog.whereILike('product.title', "%"+product_name+"%");
                      }
                      if(query.price_range != ''){
                        const priceArr = query.price_range.split("-");
                        queryLog = queryLog.whereBetween('item.price', [priceArr[0], priceArr[1]]);
                      }
                                 
      return queryLog = queryLog.paginate({ perPage: pagesize, currentPage: page }).then(result => {
                                  return result;
                                }).catch(function(err){
                                    logger.error(err);
                                });
}

/**
 * Check User is Admin.
 *
 * @param  {Object} data
 * @returns {Promise}
 */
module.exports.isAccess = function(data) {
  
  return "true";
    const userRole = commanConstanmts.USER_TYPE_ADMIN;

    let user = knex.table('users')
                      .select("*")
                      .where({
                          is_deleted : 2,
                          role_id: userRole
                      });
            return  user.then(dataObj => {
                          // if (dataObj.length === 0) {
                          //   throw Boom.notFound(localeService.translate('USER_NOT_FOUND'));
                          // }

                          return dataObj;
                        })
}


exports.usersService = {
    
};