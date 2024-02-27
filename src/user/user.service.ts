import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/user.schema";

@Injectable()
export class UserService {
	public constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

	private readonly users = [
		{
			userId: "1",
			username: "john",
			password: "changeme",
		},
		{
			userId: "2",
			username: "maria",
			password: "guess",
		},
	];

	public async findAll(): Promise<User[]> {
		return await this.model.find().exec();
	}

	public async findOne(username: string): Promise<User | undefined> {
		return await this.users.find(user => user.username === username);
	}

	// public async findOne(id: string): Promise<User> {
	// 	return await this.model.findById(id).exec();
	// }
}
