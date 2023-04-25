/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product').del()
  .then(function () {
    // Inserts seed entries
    return knex('product').insert([
      {
        "title": "Classic Wills",
        "content": "Cigarette"
      },
      {
        "title": "Wheel",
        "content": "Home care product"
      },
      {
        "title": "Parachute",
        "content": "Personal care item"
      },
      {
        "title": "Basmati Rice",
        "content": "Food & beverages"
      }
    ]);
  });
};
