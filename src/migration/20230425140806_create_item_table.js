/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('item', table => {
    table.increments();
    table.integer('product_id').index().references('id').inTable('product');
    table.integer('brand_id').index().references('id').inTable('brand');
    table.integer('user_id').index().references('id').inTable('users');
    table.float('mrp').nullable().comment('printed price of the product associated with the item.');
    table.float('discount', 100).nullable().comment('discount is given by the supplier');
    table.float('price', 100).nullable().comment('price at which the product was purchased.');
    table.smallint('quantity').nullable().comment('total quantity received at the inventory.');
    table.smallint('sold').nullable().comment('total quantity sold to the customers.');
    table.smallint('available').nullable().comment('quantity that is available on the stock.');
    table.smallint('defective').nullable().comment('total defective items');
    table.integer('is_deleted').unsigned().notNull().comment('1 for Yes, 2 for No').defaultTo('2');
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
    table.integer('created_by').unsigned().notNull().defaultTo('0');
    table.integer('updated_by').unsigned().notNull().defaultTo('0');
    table.integer('deleted_by').unsigned().notNull().defaultTo('0');
  });
}

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('item');
}
