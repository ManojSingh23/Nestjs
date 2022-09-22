import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
import { signupService } from "src/signup/signup.service";

import { adminController } from "./adminDashboard.controller";
import { adminService } from "./adminDashboard.service";

@Module({
    imports:[TypeOrmModule.forFeature([userData]),PassportModule.register({defaultStrategy:'jwt'}),JwtModule.register({
        secret: 'malik',
        signOptions: {
            expiresIn:3600
        }
    })],
    controllers:[adminController],
    providers:[signupService,adminService]

})
export class adminModule{}