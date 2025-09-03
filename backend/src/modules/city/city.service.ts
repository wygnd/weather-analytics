import {Inject, NotFoundException} from "@nestjs/common";
import {CityModel} from "./entities/city.entity";
import {RedisService} from "../redis/redis.service";
import {NotFoundError} from "rxjs";
import {CityDto} from "./dtos/city.dto";
import {CreateCityDto} from "./dtos/create-city.dto";

export class CityService {
	constructor(
		@Inject("CityRepository")
		private readonly cityRepository: typeof CityModel,
		private readonly redisService: RedisService
	) {}

	async getCityById(cityId: string) {
			const cityFromCache = await this.redisService.get<CityDto>(cityId);

			if(!cityFromCache) {
				const cityFromDatabase = await this.cityRepository.findByPk(cityId);

				if(!cityFromDatabase) throw new NotFoundException();
				const cityDto = new CityDto(cityFromDatabase);
				await this.redisService.set<CityDto>(cityDto.id, cityDto);
				return cityDto;
			}

			return cityFromCache;
	}

	async getCityList() {
		return await this.cityRepository.findAll();
	}

	async createCity(cityDto: CreateCityDto): Promise<void> {
		// const wasCreateNewCity = await this.cityRepository.create();
	}
}