/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
  .then(function () {
    // Inserts seed entries
    return knex('category').insert([
      {
        "title": "Home care",
        "content": "This category consume daily uses home product like dettol, colin"
      },
      {
        "title": "Personal care",
        "content": "This category consume daily uses personal product like hair oil, toothpaste"
      },
      {
        "title": "Food & beverages",
        "content": "This category consume daily uses foods like Atta, Rice"
      },
      {
        "title": "Alcohol & cigarettes",
        "content": "This category consume Alcohol & cigarettes"
      }
    ]);
  });
};
