import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
import { Repository } from "typeorm";
import { loginDTO } from "./login.dto";
import * as bcrypt from 'bcrypt'
import { userDataPayload } from "./userData.paylod";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class loginService{
    constructor(
        @InjectRepository(userData)
        private loginRepo:Repository<userData>,
        private jwtService:JwtService
    ){}
    async loginUser(loginDTO:loginDTO) {
        const email=loginDTO.username
        const username = loginDTO.username
        const user = await this.loginRepo.findOneBy([{email},{username}])

        if(!user){
            
            console.log("not a user");
            return false
        }
        else{
            if(await bcrypt.compare(loginDTO.password,user.password))
            {
                console.log(user)
                
                const payload:userDataPayload={
                    name:user.name,
                    username:user.username,
                    email:user.email,
                    roles:user.roles
                }
                const accessToken= this.jwtService.sign(payload);
                console.log(accessToken)
                return accessToken;
            }
            else{
                return false
            }

        } 
        

        
    }
    

}