import {Inject} from "@nestjs/common";
import {CityModel} from "./entities/city.entity";

export class CityService {
	constructor(
		@Inject("CityRepository")
		private readonly cityRepository: typeof CityModel
	) {}

	async getCityById() {}

	async getCityList() {
		return await this.cityRepository.findAll();
	}
}