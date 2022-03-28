
exports.up = async function (knex) {
  return knex.schema
    .createTable('ProductCategory', function (table) {
      table.text('nid').primary()
      table.text('name')
      table.text('companyId')
      table.boolean('active')
      table.integer('oid')
      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('ProductCategory')
}
