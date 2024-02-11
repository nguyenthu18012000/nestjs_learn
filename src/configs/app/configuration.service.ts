import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
	public constructor(private configService: ConfigService) {}

	public get name(): string {
		return this.configService.get<string>("app.name", { infer: true }) ?? "";
	}
	public get env(): string {
		return this.configService.get<string>("app.env", { infer: true }) ?? "";
	}
	public get url(): string {
		return this.configService.get<string>("app.url", { infer: true }) ?? "";
	}
	public get port(): number {
		return Number(this.configService.get<number>("app.port"));
	}
}
