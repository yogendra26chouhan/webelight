/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item').del()
  .then(function () {
    // Inserts seed entries
    return knex('item').insert([
      {
        "product_id": "1",
        "brand_id": "4",
        "user_id": "2",
        "mrp": "10",
        "discount": "5",
        "price": "9.50",
        "quantity": "10",
        "sold": "3",
        "available": "7",
        "defective": "0"
      },
      {
        "product_id": "3",
        "brand_id": "2",
        "user_id": "1",
        "mrp": "60",
        "discount": "10",
        "price": "54",
        "quantity": "15",
        "sold": "10",
        "available": "5",
        "defective": "1"
      },
      {
        "product_id": "4",
        "brand_id": "3",
        "user_id": "2",
        "mrp": "75",
        "discount": "10",
        "price": "67.50",
        "quantity": "100",
        "sold": "75",
        "available": "25",
        "defective": "0"
      },
      {
        "product_id": "2",
        "brand_id": "1",
        "user_id": "1",
        "mrp": "5",
        "discount": "10",
        "price": "4.50",
        "quantity": "50",
        "sold": "10",
        "available": "40",
        "defective": "2"
      }
    ]);
  });
};
