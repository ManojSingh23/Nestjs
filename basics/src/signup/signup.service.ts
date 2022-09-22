import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";

import {  Repository } from "typeorm";
import { signupDTO } from "./signup.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class signupService{

    constructor(
        @InjectRepository(userData)
        private signupRepo:Repository<userData>
    ){}

    async saveUserData(signupDTO:signupDTO) {
        let password = signupDTO.password
        console.log(password)
        const salt = await bcrypt.genSalt()
        console.log(salt);
        signupDTO.password = await hashPassword(password,salt)
        console.log(signupDTO.password)
        this.signupRepo.save(signupDTO)
    }

}

function hashPassword(password:string,salt:any){
    return bcrypt.hash(password,salt)
    
}
