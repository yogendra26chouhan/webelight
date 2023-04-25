/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('product_category', table => {
    table.increments();
    table.integer('product_id').index().references('id').inTable('product');
    table.integer('category_id').index().references('id').inTable('category');
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
  return knex.schema.dropTable('product_category');
}
