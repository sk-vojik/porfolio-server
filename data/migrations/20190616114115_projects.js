
exports.up = function (knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments("id");
    table.string("name");
    table.text("description");
    table.string("url");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
