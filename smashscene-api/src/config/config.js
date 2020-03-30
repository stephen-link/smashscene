module.exports = {
    port: process.env.port || 3003,
    db: {
        database: process.env.database || 'ssdb',
        user: process.env.user || 'postgres',
        password: process.env.password || ''
    },
    
}