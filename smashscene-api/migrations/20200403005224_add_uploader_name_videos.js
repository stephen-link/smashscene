
exports.up = async (knex) => {
  return knex.schema.table('videos', function(table) {
    table.text('uploaderName');
  });
};

exports.down = async (knex) => {
  return knex.schema.table('videos', function(table) {
    table.dropColumn('uploaderName');
  });
};
