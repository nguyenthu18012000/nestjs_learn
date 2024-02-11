import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "src/user/user.schema";
import { UserService } from "src/user/user.service";

@ApiTags("user")
@Controller()
export class UserController {
	public constructor(private readonly userService: UserService) {}

	@Get("all")
	public getAll(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Get("user")
	public findUserById(): Promise<User> {
		return this.userService.findOne("65c4cd49481eead3f61f2b29");
	}
}
