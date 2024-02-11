import * as Joi from "joi";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./configuration";
import { AppConfigService } from "./configuration.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			validationSchema: Joi.object({
				APP_NAME: Joi.string(),
				APP_ENV: Joi.string()
					.valid("development", "production", "testing", "staging")
					.default("development"),
				APP_URL: Joi.string(),
				APP_PORT: Joi.number().default(9000),
			}),
		}),
	],
	providers: [ConfigService, AppConfigService],
	exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
