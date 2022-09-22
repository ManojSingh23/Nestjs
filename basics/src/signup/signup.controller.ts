import { Body, Controller, Get, Post, Res} from "@nestjs/common";
import { Response } from "express";

import { signupDTO } from "./signup.dto";
import { signupService } from "./signup.service";

@Controller()
export class signupController{
    constructor(private readonly signupService:signupService){}

    @Post('signup')
    registerData(@Body() signupDTO:signupDTO, @Res() res:Response){
        console.log(signupDTO)
        this.signupService.saveUserData(signupDTO)
        res.redirect('..')
    }
    @Get('clearCookie')
    async clearCookies(@Res() res:Response){
        console.log("clearing cookies")
        res.clearCookie('accessToken');
        res.clearCookie('username');
         res.redirect('home')
       
        
        
    }

}