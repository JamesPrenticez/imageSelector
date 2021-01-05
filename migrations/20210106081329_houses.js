exports.up = (knex, Promise) => {
    return knex.schema.createTable('houses', (table) =>{
    table.increments('id').primary()
    table.string('name')
    table.string('gfa')
    table.string('cost')
    table.text('description')
    table.string('image_cover')
    table.string('image_plan')
    table.string('image_3d')
    table.string('image_elevations')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('houses')
};