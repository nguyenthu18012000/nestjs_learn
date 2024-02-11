import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";
// import { query } from "express";

@Controller()
export class AppController {
	public constructor(private readonly appService: AppService) {}

	@Get("/aaa")
	// @Query(key: string)
	public getHello(@Query("type") type): string {
		console.log(type);
		return this.appService.getHello();
	}
}
