'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('rounds', (table) => {
    table.increments();
    table.integer('games_id').notNullable().references('id').inTable('games').onDelete('CASCADE').index();
    table.string('label').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rounds');
};
