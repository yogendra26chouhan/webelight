/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('role_permissions').del()
  .then(function () {
    // Inserts seed entries
    return knex('role_permissions').insert([
      {
        "role_id": "1",
        "permission_id": "1"
      },
      {
        "role_id": "1",
        "permission_id": "2"
      },
      {
        "role_id": "1",
        "permission_id": "3"
      },
      {
        "role_id": "1",
        "permission_id": "4"
      },
      {
        "role_id": "2",
        "permission_id": "2"
      },
      {
        "role_id": "2",
        "permission_id": "3"
      },
      {
        "role_id": "2",
        "permission_id": "4"
      }
    ]);
  });
};
