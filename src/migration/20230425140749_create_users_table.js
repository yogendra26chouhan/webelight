/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.integer('role_id').index().references('id').inTable('role');
    table.string('first_name', 50).nullable();
    table.string('middele_name', 50).nullable();
    table.string('last_name', 50).nullable();
    table.string('user_email', 75).nullable();
    table.string('mobile', 20).nullable();
    table.string('password', 100).nullable();
    table.timestamp('last_login').notNull().defaultTo(knex.raw('now()'));
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
  return knex.schema.dropTable('users');
}
