import {IsDecimal, IsNotEmpty, IsString} from "class-validator";
import {CityCreationAttributes} from "../interfaces/city.interface";

export class CreateCityDto implements CityCreationAttributes {
	@IsNotEmpty({ message: "Invalid name field" })
	@IsString()
	name: string;

	@IsNotEmpty({message: "Invalid country field"})
	@IsString()
	country: string;

	@IsNotEmpty({message: "Invalid lat field"})
	@IsDecimal({force_decimal: true, decimal_digits: '2'})
	lat: number;

	@IsNotEmpty({message: "Invalid lat field"})
	@IsDecimal({force_decimal: true, decimal_digits: '2'})
	lon: number;
}