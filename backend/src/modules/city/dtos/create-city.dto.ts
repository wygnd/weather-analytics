import {IsDecimal, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {CityCreationAttributes} from "../interfaces/city.interface";

export class CreateCityDto implements CityCreationAttributes {
	@IsNotEmpty({ message: "Invalid name field" })
	@IsString()
	name: string;

	@IsNotEmpty({message: "Invalid country field"})
	@IsString()
	country: string;

	@IsNotEmpty({message: "Invalid lat field"})
	@IsNumber()
	lat: number;

	@IsNotEmpty({message: "Invalid lat field"})
	@IsNumber()
	lon: number;
}