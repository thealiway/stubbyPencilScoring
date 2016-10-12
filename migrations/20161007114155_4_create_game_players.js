'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('game_players', (table) => {
        table.increments();
        table.integer('games_id')
            .notNullable()
            .references('id')
            .inTable('games')
            .onDelete('CASCADE')
        table.integer('users_id').notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
        table.string('admin').notNullable().defaultTo('');
        table.timestamps(true, true);

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};
