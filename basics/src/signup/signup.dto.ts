import { role } from "src/Entity/role.enum";


export class signupDTO{
  
    name:string;
    username:string; 
    email:string;
    password:string;
    roles:role;

}