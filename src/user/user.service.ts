import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/user.schema";

@Injectable()
export class UserService {
	public constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

	public getHello(): string {
		return "Hello World!";
	}

	public async findAll(): Promise<User[]> {
		return await this.model.find().exec();
	}

	public async findOne(id: string): Promise<User> {
		return await this.model.findById(id).exec();
	}
}
