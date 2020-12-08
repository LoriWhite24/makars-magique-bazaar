﻿import { Role } from "./role";

export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
    image?: File;
}