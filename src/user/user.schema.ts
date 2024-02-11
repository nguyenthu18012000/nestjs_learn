import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
	@Prop()
	public name: string;

	@Prop()
	public age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
