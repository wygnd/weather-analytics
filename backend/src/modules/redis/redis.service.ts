import {Inject, InternalServerErrorException} from "@nestjs/common";
import {CACHE_MANAGER, Cache} from "@nestjs/cache-manager";
import {ConfigService} from "@nestjs/config";

export class RedisService {
	private readonly redisKeyHead: string;

	constructor(
		@Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
		private readonly configService: ConfigService,
	) {
		this.redisKeyHead = configService.get<string>("constants.redisKey") ?? "wals";
	}

	async set<T>(key: string, value: T): Promise<void> {
		try {
			await this.cacheManager.set(`${this.redisKeyHead}::${key}`, value);
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}

	async get<T>(key: string): Promise<T | undefined> {
		try {
			const jsonResult = await this.cacheManager.get<string>(`${this.redisKeyHead}::${key}`);
			return jsonResult ? JSON.parse(jsonResult) : undefined;
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}

	async del(key: string): Promise<boolean> {
		try {
			return await this.cacheManager.del(`${this.redisKeyHead}::${key}`);
		} catch (error) {
			throw new InternalServerErrorException(error);
		}
	}
}