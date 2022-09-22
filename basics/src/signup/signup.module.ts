import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userData } from "../Entity/data.entity";
import { signupController } from "./signup.controller";
import { signupService } from "./signup.service";

@Module({
    imports:[TypeOrmModule.forFeature([userData])],
    controllers:[signupController],
    providers:[signupService]
})

export class signupModule{}