const { Model } = require('objection')

class Videos extends Model {
    static get tableName() {
        return 'videos';
    }

    static get jsonSchema() {
        return {
            type: 'object',

            properties: {
                postId: {type: 'string'},
                userUd: { type: 'string' },
                url: { type: 'string' },
                postTimestamp: { type: 'string' },
                upvotes: { type: 'number' },
                score: { type: 'number' }
            }
        };
    }
}

module.exports = Videos;