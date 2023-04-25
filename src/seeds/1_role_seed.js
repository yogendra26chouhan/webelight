/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('role').del()
  .then(function () {
    // Inserts seed entries
    return knex('role').insert([
      {
        "title": "Admin",
        "description": "its owner of app"
      },
      {
        "title": "Supplier",
        "description": "Supply items"
      },
      {
        "title": "Salesperson",
        "description": "sale items"
      },
      {
        "title": "Customer",
        "description": "purchase items"
      }
    ]);
  });
};
