import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post} from "@nestjs/common";
import {CityService} from "./city.service";
import {GetCityByIdDto} from "./dtos/get-city.dto";
import {CreateCityDto} from "./dtos/create-city.dto";

@Controller('city')
export class CityController {
	constructor(private readonly cityService: CityService) {}


	@Get("/:id")
	async getCity(@Param() params: GetCityByIdDto) {
		try {
			return await this.cityService.getCityById(params.id);
		} catch (error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}

	// todo: Add auth middleware
	@Post("/")
	async createCity(@Body() createCityDto: CreateCityDto) {
		try {
			return await this.cityService.createCity(createCityDto);
		} catch(error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}

	@Get("/")
	async getCityList() {
		try {
			return await this.cityService.getCityList();
		} catch(error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}

	@Delete("/:id")
	async removeCity(@Param() params: GetCityByIdDto) {
		try {
			return await this.cityService.removeCity(params.id);
		} catch(error) {
			throw new HttpException(error, HttpStatus.BAD_REQUEST);
		}
	}
}