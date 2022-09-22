import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
import { loginModule } from "src/login/login.module";
import { userDasboardController } from "./userDashboard.controller";
import { userDashboardService } from "./userDashboard.service";

@Module({
    imports:[TypeOrmModule.forFeature([userData]),PassportModule.register({defaultStrategy:'jwt'}),JwtModule.register({
        secret: 'malik',
        signOptions:{
            expiresIn:3600,
        }
        
    })],
    controllers:[userDasboardController],
    providers:[userDashboardService]
})
export class userDashboardModule{

}