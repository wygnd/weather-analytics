import {WeatherModel} from "./entities/weather.entity";

export const weatherProviders = [{provide: "WeatherRepository", useValue: WeatherModel}]