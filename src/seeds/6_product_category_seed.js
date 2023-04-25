/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_category').del()
  .then(function () {
    // Inserts seed entries
    return knex('product_category').insert([
      {
        "product_id": "2",
        "category_id": "1"
      },
      {
        "product_id": "3",
        "category_id": "2"
      },
      {
        "product_id": "4",
        "category_id": "3"
      },
      {
        "product_id": "1",
        "category_id": "4"
      }
    ]);
  });
};
