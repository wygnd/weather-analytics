import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {cityProviders} from "./city.providers";
import {RedisModule} from "../redis/redis.module";

@Module({
	imports: [DatabaseModule, RedisModule],
	providers: [...cityProviders],
})
export class CityModule {}