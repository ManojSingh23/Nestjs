import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

export class roleguard implements CanActivate{
    private role: number[];
    constructor(data:number[]){this.role=data}
     canActivate(context: ExecutionContext){
        const request =context.switchToHttp().getRequest();
        const res =context.switchToHttp().getResponse();
        const user = request.user;
        console.log(this.role,user.roles);
        for(let i=0;i<this.role.length;i++)
        {
            if(this.role[i]==user.roles)
            {
                console.log("true")
                return  true;
                
            }
            
        }
        return res.redirect('error')
        
    }
    
}