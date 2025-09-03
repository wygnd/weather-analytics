import {CityModel} from "./entities/city.entity";

export const cityProviders = [{provide: "CityRepository", useValue: CityModel}]