import {Module} from "@nestjs/common";
import {usersProviders} from "./users.providers";
import {DatabaseModule} from "../database/database.module";

@Module({
	imports: [DatabaseModule],
	providers: [...usersProviders],
	exports: []
})
export class UsersModule {}