import {Optional} from "sequelize";

export interface CityAttributes {
	cityId: number;
	name: string;
	country: string;
	lat: number;
	lon: number;
}

export type CityCreationAttributes = Optional<CityAttributes, 'cityId'>