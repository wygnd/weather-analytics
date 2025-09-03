import {Inject} from "@nestjs/common";
import {WeatherModel} from "./entities/weather.entity";
import {HttpService} from "@nestjs/axios";

export class WeatherService {
	constructor(
		@Inject("WeatherRepository")
		private readonly weatherRepository: typeof WeatherModel,
		private readonly httpService: HttpService,
	) {}



}
