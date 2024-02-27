import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop()
	public userId: string;
	@Prop()
	public username: string;
	@Prop()
	public password: string;
	@Prop()
	public name?: string;

	@Prop()
	public age?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
