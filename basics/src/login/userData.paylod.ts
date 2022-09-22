import { role } from "src/Entity/role.enum"

export interface userDataPayload{
    name:string
    username:string
    email:string  
    roles:role
}