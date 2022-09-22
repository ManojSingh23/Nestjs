import { Body, Controller, Get, Post, Render, Req, Res, UseGuards } from "@nestjs/common";
import { loginDTO } from "./login.dto";
import { loginService } from "./login.service";
import { Response ,Request} from "express";
import { AuthGuard } from "@nestjs/passport";
import { roleguard } from "src/roleguard/role.guard";

@Controller()
export class loginController{

    constructor(private readonly loginService:loginService){}
    @Get('login')
    @Render('login')
    loginRender(){
    }

    
    @Post('login')
    async loginUser(@Body() loginDTO:loginDTO,@Res() res:Response, @Req() req:Request){
    
        const accessToken =  await this.loginService.loginUser(loginDTO);
        console.log(accessToken)
        
        if(accessToken==false){
            res.redirect('..')
            
        }
        else{
            res.cookie('accessToken',accessToken)
            res.cookie('username',loginDTO.username)
            res.redirect('dashboard')
        }
        
    }
    
        
}