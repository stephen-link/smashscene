
exports.up = function(knex) {
  return knex.schema.createTable('videos', (table) => {
      table.text('postId');
      table.text('userId');
      table.text('url');
      table.text('postTimestamp');
      table.integer('upvotes');
      table.float('score');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('videos');
};
