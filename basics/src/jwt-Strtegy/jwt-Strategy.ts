import { Injectable, Res, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Request, Response } from "express";
import {ExtractJwt, Strategy} from 'passport-jwt'
import { userData } from "src/Entity/data.entity";
import { Repository } from "typeorm";

import { userDataPayload } from "../login/userData.paylod";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(userData)
        private checkTokenRepo:Repository<userData>
    ){
        super({
            jwtFromRequest:ExtractJwt.fromExtractors([(Request:Request)=>{
                const token = Request.cookies['accessToken'];
                return token;
            }]),
           
            secretOrKey: 'malik'
        });
    }
    async validate(payload:userDataPayload){
        
        const email= payload.email;
        const user = await this.checkTokenRepo.findOneBy({email})
        if(user){
            return payload
        }
    }
}