import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { DatabaseModule } from "./providers/database";
import { AppConfigModule } from "./configs/app/configuration.module";

@Module({
	imports: [AppConfigModule, DatabaseModule, UserModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
