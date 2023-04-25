/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('permission', table => {
    table.increments();
    table.string('title', 100).nullable();
    table.text('url').nullable().comment('Store route url');
    table.text('description').nullable().comment('Description of Permission');
    table.integer('active').unsigned().notNull().comment('1 for Yes, 2 for No').defaultTo('1');
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
  return knex.schema.dropTable('permission');
}
