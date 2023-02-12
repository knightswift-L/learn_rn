import { post } from "../request";

export async function login():Promise<Response>{
    return post("/login");
}

export async function register():Promise<Response>{
    return post("/register");
}

export async function resetPassword():Promise<Response>{
    return post("/resetPassword");
}