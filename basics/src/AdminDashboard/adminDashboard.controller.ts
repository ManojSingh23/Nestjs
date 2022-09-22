import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { roleguard } from "src/roleguard/role.guard";
import { Response,Request } from "express";
import { AuthGuard } from "@nestjs/passport";
import { adminService } from "./adminDashboard.service";
import { signupService } from "src/signup/signup.service";

@Controller()
export class adminController{
    constructor(private adminService:adminService,private signupService:signupService){}

    @UseGuards(AuthGuard(),new roleguard([0]))
    @Get('admin')
    async admin(@Res() res:Response,@Req() req:Request){
        const user = await this.adminService.getAdminData()
        const username = req.cookies['username']
        res.render('admin_new',{user:user,logedinuser:username}) 
    }

    @Get('getAdminData')
    async getAdminData(){
            const data =  await this.adminService.getAdminData();
            return data
    }

    @Delete('deleteAdminData/:id')
    deleteAdminData(@Param() user){
        console.log(user.id)
         this.adminService.deleteAdminData(user.id);
    }

    @Put('updateAdminData')
    updateAdminData(@Body() data){
        this.adminService.updateAdminData(data)
    }

    @Post('addUserData')
    async addUserData(@Body() obj){
        return await this.signupService.saveUserData(obj)
    }
}