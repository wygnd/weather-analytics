import {RedisOptions, Transport} from "@nestjs/microservices";

export default (): {redis: RedisOptions} => ({
	redis: {
		transport: Transport.REDIS,
		options: {
			host: process.env.REDIS_HOST,
			port: process.env.REDIS_PORT ? +process.env.REDIS_PORT : 6379,
		}
	}
})