import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "src/user/user.controller";
import { User, UserSchema } from "src/user/user.schema";
import { UserService } from "src/user/user.service";

@Module({
	imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
