
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        // VIN
        tbl.string('VIN', 17).primary().notNullable().unique().index();

        // Make
        tbl.string('make').notNullable().index();

        // Model
        tbl.string('model').notNullable().index();

        // Model Year
        tbl.integer('model_year', 4).notNullable();

        // Mileage
        tbl.integer('mileage').notNullable();

        // Transmission Type
        tbl.string('transmission_type').defaultTo('unknown');

        // Title Status
        tbl.string('title_status').defaultTo('unknown');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
