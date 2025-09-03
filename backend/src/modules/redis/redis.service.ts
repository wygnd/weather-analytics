import {Inject, InternalServerErrorException} from "@nestjs/common";
import {CACHE_MANAGER, Cache} from "@nestjs/cache-manager";

export class RedisService {
	constructor(
		@Inject(CACHE_MANAGER) private readonly cacheManager: Cache
	) {
	}

	async set<T>(key: string, value: T): Promise<void> {
		try {
			await this.cacheManager.set(`wals::${key}`, value);
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}

	async get<T>(key: string): Promise<T | undefined> {
		try {
			const jsonResult = await this.cacheManager.get<string>(`wals::${key}`);
			return jsonResult ? JSON.parse(jsonResult) : undefined;
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}
}