import {IsNotEmpty, IsString} from "class-validator";
import {IsFloat} from "sequelize-typescript";

export class CreateCityDto {
	@IsNotEmpty({ message: "Invalid name field" })
	@IsString()
	name: string;

	@IsNotEmpty({message: "Invalid country field"})
	@IsString()
	country: string;

	@IsNotEmpty({message: "Invalid lat field"})
	@IsFloat
	lat: number;

	@IsNotEmpty({message: "Invalid lat field"})
	@IsFloat
	lon: number;
}