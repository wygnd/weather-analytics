import {IsNotEmpty, IsString} from "class-validator";

export class GetCityByIdDto {
	@IsNotEmpty()
	@IsString()
	id: string;
}