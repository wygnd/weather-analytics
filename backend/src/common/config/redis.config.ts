import {redisStore} from "cache-manager-redis-store";

export default () => ({
	redis: {
		ttl: process.env.REDIS_TTL ? +process.env.REDIS_TTL : 60,
		store: redisStore,
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT ? +process.env.REDIS_PORT : 6379,
	}
})