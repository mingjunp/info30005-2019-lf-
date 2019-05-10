const redis = require('redis');

const redisClient = redis.createClient("6379", "45.76.121.102");
redisClient.on('error', err => {
    console.error(err)
});

module.exports = redisClient;