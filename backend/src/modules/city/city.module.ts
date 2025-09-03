import {Module} from "@nestjs/common";
import {DatabaseModule} from "../database/database.module";
import {cityProviders} from "./city.providers";

@Module({
	imports: [DatabaseModule],
	providers: [...cityProviders],
})
export class CityModule {}