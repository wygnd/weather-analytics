import {CityModel} from "../entities/city.entity";

export class CityDto {
	public id: number;
	public name: string;
	public country: string;
	public lat: number;
	public lon: number;

	constructor(city: CityModel) {
		this.id = city.getDataValue("cityId");
		this.name = city.getDataValue("name");
		this.country = city.getDataValue("country");
		this.lat = +city.getDataValue("lat");
		this.lon = +city.getDataValue("lon");
	}
}