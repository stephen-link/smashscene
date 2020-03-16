
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {postId: '1', userId: '1', url: 'youtube.com/watch?v=hAUCfI9U79E', postTimestamp: '1111', upvotes: 0, score: 1.1},
        {postId: '2', userId: '1', url: 'youtube.com/watch?v=hAUCfI9U79E', postTimestamp: '1111', upvotes: 5, score: 1.1},
        {postId: '3', userId: '2', url: 'youtube.com/watch?v=hAUCfI9U79E', postTimestamp: '1111', upvotes: 2, score: 1.1},
        {postId: '4', userId: '2', url: 'youtube.com/watch?v=hAUCfI9U79E', postTimestamp: '1111', upvotes: 0, score: 1.1}
      ]);
    });
};
