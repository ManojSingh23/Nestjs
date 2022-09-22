import { Body, Controller, Delete, Get, Param, Post, Put, Render,  Req,  Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {  Request, Response } from "express";
import { roleguard } from "src/roleguard/role.guard";
import { userDashboardService } from "./userDashboard.service";


@Controller()
export class userDasboardController{

    constructor(private readonly userDashboardService:userDashboardService){}

   
    @UseGuards(AuthGuard())
    @Get('dashboard')
    @Render('dashbord')
    userDashboard(){

    }

    @UseGuards(AuthGuard(),new roleguard([0,1]))
    @Get('user')
    user(@Res() res:Response,@Req() req:Request){
    
        res.render('user',{data:"User"})
    }
    
    @Get('error')
    DashError(){
        return "You are authorized to access this page"
    }

    @Get('getData')
    async postData(@Req() req:Request){
        const username = req.cookies['username']
        console.log('username');
        const user = await this.userDashboardService.getData(username)
        return user;

        
    }
    @Put('putData')
    putData(@Body() data){

        console.log("//////",data);

        this.userDashboardService.putData(data)

    }

    @Delete('deleteData/:id')
    async deleteData(@Param() user, @Res() res:Response){
        console.log(user.id)
        //  await this.userDashboardService.deleteData(user.id);
         res.redirect(303, '../clearCookie')
         
         
    }
}