import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {CityService} from "./city.service";
import {GetCityByIdDto} from "./dtos/get-city.dto";
import {CreateCityDto} from "./dtos/create-city.dto";

@Controller('cities')
export class CityController {
	constructor(private readonly cityService: CityService) {}


	@Get("/id")
	async getCity(@Param() params: GetCityByIdDto) {
		return await this.cityService.getCityById(params.id);
	}

	@Post("/")
	async createCity(@Body() createCityDto: CreateCityDto) {
		return await this.cityService.createCity(createCityDto);
	}
}