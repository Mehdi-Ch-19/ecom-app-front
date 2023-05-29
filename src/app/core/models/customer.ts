import { Adresee } from "./adresse";
import { Role } from "./role";

export class Customer{
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    adresse?:Adresee
    isAdmin?:boolean;
    roles?:Role[]
}