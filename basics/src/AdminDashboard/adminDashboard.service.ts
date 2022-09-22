import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userData } from "src/Entity/data.entity";
import { Repository } from "typeorm";

@Injectable()
export class adminService{
    
    constructor(@InjectRepository(userData)
    private adminDataRepo:Repository<userData>){}

    async getAdminData() {
        const data = await this.adminDataRepo.find();
        return data;
        
    }
    deleteAdminData(id: any) {
        this.adminDataRepo.delete(id)
    }
    updateAdminData(data: any) {

        this.adminDataRepo.update(data.id,data)
        
    }
    
    async addUserData(obj: object) {
        return await this.adminDataRepo.save(obj)
    }
    
    


}