import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
import { Repository } from "typeorm";

@Injectable()
export class userDashboardService{
    
    constructor(@InjectRepository(userData)
    private getUserRepo:Repository<userData>){}

    async getData(username:string) {
        const user = await this.getUserRepo.findOneBy({username});
        return user;
    }
     putData(data: any) {
        
        this.getUserRepo.update(data.id,data)
        
    }
    async deleteData(id: any) {
        return await this.getUserRepo.delete(id)
        
    }
    
}