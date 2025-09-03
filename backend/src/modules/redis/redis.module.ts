import {Module} from "@nestjs/common";
import {CacheModule} from "@nestjs/cache-manager";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {RedisService} from "./redis.service";

@Module({
	imports: [
		CacheModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({...configService.get("redis")}),
			inject: [ConfigService],
		})
	],
	providers: [RedisService],
	exports: [RedisService]
})
export class RedisModule {
}