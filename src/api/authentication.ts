import { post } from "../request";
import { Result } from "../types/common";

export async function login<T>(data: { account: string, password: string }): Promise<Result<T>> {
    return post<Result<T>>("/login", { data });
}

export async function register(): Promise<Response> {
    return post("/register");
}

export async function resetPassword(): Promise<Response> {
    return post("/resetPassword");
}