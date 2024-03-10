import { Adresee } from "./adresse";
import { Role } from "./role";

export class Customer{
    id?:number;
    name?:string;
    email?:string;
    adresse?:Adresee
    roles?:Role[]
}