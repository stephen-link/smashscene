
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {
          postId: '1', 
          userId: '1', 
          url: 'youtube.com/watch?v=hAUCfI9U79E', 
          postTimestamp: '1111', 
          upvotes: 0, 
          score: 1.1,
          thumbnailUrl: 'https://i.ytimg.com/vi/q8m4Phc70qA/sddefault.jpg',
          title: 'A video!',
          creatorName: 'slink'
        },
        {
          postId: '1', 
          userId: '1', 
          url: 'youtube.com/watch?v=hAUCfI9U79E', 
          postTimestamp: '1111', 
          upvotes: 0, 
          score: 1.1,
          thumbnailUrl: 'https://i.ytimg.com/vi/q8m4Phc70qA/sddefault.jpg',
          title: 'A video!',
          creatorName: 'slink'
        },
        {
          postId: '1', 
          userId: '1', 
          url: 'youtube.com/watch?v=hAUCfI9U79E', 
          postTimestamp: '1111', 
          upvotes: 0, 
          score: 1.1,
          thumbnailUrl: 'https://i.ytimg.com/vi/q8m4Phc70qA/sddefault.jpg',
          title: 'A video!',
          creatorName: 'slink'
        },
        {
          postId: '1', 
          userId: '1', 
          url: 'youtube.com/watch?v=hAUCfI9U79E', 
          postTimestamp: '1111', 
          upvotes: 0, 
          score: 1.1,
          thumbnailUrl: 'https://i.ytimg.com/vi/q8m4Phc70qA/sddefault.jpg',
          title: 'A video!',
          creatorName: 'slink'
        }
      ]);
    });
};
