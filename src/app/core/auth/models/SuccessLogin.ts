import { Role } from "../../models/role";

export interface successLogin{
    "access_token":string,
    "refresh_token":string,
    "id":number,
    "email":string,
    "roles":Role[]
}