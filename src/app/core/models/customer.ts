import { Role } from "./role";

export class Customer{
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    isAdmin?:boolean;
    roles?:Role[]
}