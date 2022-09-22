import {  Module } from "@nestjs/common";
import { JwtModule} from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
import { jwtStrategy } from "../jwt-Strtegy/jwt-Strategy";
import { loginController } from "./login.controller";
import { loginService } from "./login.service";


@Module({
    imports:[TypeOrmModule.forFeature([userData]),PassportModule.register({defaultStrategy:'jwt'}),JwtModule.register({
        secret: 'malik',
        signOptions:{
            expiresIn:3600,
        }
        
    })],
    controllers:[loginController],
    providers:[loginService,jwtStrategy]
})
export class loginModule{}