import { open } from "realm";
import { post } from "../request";

export async function login<T>(data: { account: string, password: string }): Promise<T> {
    return post<T>("/login", { data });
}

export async function register<T>(data: { phone?: string, email?: string, password: string }): Promise<T> {
    return post("/register", { data });
}

export async function resetPassword(): Promise<Response> {
    return post("/resetPassword");
}