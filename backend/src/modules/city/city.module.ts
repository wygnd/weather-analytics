import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {cityProviders} from "./city.providers";
import {RedisModule} from "../redis/redis.module";
import {CityController} from "./city.controller";
import {CityService} from "./city.service";

@Module({
	imports: [DatabaseModule, RedisModule],
	controllers: [CityController],
	providers: [CityService, ...cityProviders],
})
export class CityModule {}