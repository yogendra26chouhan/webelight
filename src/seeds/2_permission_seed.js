/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('permission').del()
  .then(function () {
    // Inserts seed entries
    return knex('permission').insert([
      {
        "title": "Get Customer List",
        "url": "http://localhost:3000/api/getCustomers",
        "description": "Get all cutomers using this api"
      },
      {
        "title": "Add Item",
        "url": "http://localhost:3000/api/addItem",
        "description": "Add item with all details"
      },
      {
        "title": "Edit Item",
        "url": "http://localhost:3000/api/getItem/{id}",
        "description": "Get item details by id"
      },
      {
        "title": "Delete Item",
        "url": "http://localhost:3000/api/deleteItem/{id}",
        "description": "Delete item by id"
      }
    ]);
  });
};
