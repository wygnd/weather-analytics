import {Inject, NotFoundException} from "@nestjs/common";
import {CityModel} from "./entities/city.entity";
import {RedisService} from "../redis/redis.service";
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
				await this.redisService.set<CityDto>(`${cityDto.id}`, cityDto);
				return cityDto;
			}

			return cityFromCache;
	}

	async getCityList() {
		return (await this.cityRepository.findAll()).map(city => new CityDto(city));
	}

	async createCity(cityDto: CreateCityDto): Promise<CityDto> {
		const newCity = await this.cityRepository.create(cityDto);
		const newCityDto = new CityDto(newCity);
			await this.redisService.set<CityDto>(`${newCityDto.id}`, newCityDto);
		return newCityDto;
	}

	async removeCity(cityId: string) {


		await this.cityRepository.destroy({
			where: {
				cityId: cityId
			}
		})
	}
}