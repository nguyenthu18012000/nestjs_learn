import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	public constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	public async signIn(username: string, pass: string): Promise<any> {
		const user = await this.userService.findOne(username);
		if (user?.password !== pass) {
			throw new UnauthorizedException();
		}
		const { password, ...result } = user;
		// TODO: Generate a JWT and return it here
		// instead of the user object
		const payload = { sub: user?.userId, username: user.username };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
