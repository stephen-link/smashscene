
exports.up = async (knex) => {
  return knex.schema.table('videos', function(table) {
    table.text('thumbnailUrl');
    table.text('title');
    table.text('creatorName');
  });
}

exports.down = async (knex) => {
  return knex.schema.table('videos', function(table) {
    table.dropColumn('thumbnailUrl');
    table.dropColumn('title');
    table.dropColumn('creatorName');
  });
}
