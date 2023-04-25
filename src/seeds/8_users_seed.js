/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        "role_id": "1",
        "first_name": "Yogendra",
        "middele_name": "",
        "last_name": "Chouhan",
        "user_email": "yogendra@gmail.com",
        "mobile": "1234567890",
        "password": "123456"
      },
      {
        "role_id": "2",
        "first_name": "Raj",
        "middele_name": "",
        "last_name": "Mehta",
        "user_email": "raj@gmail.com",
        "mobile": "1234567890",
        "password": "123456"
      },
      {
        "role_id": "3",
        "first_name": "Ram",
        "middele_name": "",
        "last_name": "Sharma",
        "user_email": "ram@gmail.com",
        "mobile": "1234567890",
        "password": "123456"
      },
      {
        "role_id": "4",
        "first_name": "shyam",
        "middele_name": "",
        "last_name": "Sharma",
        "user_email": "shyam@gmail.com",
        "mobile": "1234567890",
        "password": "123456"
      }
    ]);
  });
};
