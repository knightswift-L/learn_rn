import { get, post } from "../request";
import { Result } from "../types/common";
export async function getUserInfo<T>(): Promise<T> {
    return await get<T>("/user/info");
}

export async function updateUserInfo<T>(data: Record<string, any>): Promise<T> {
    return await post<T>("/user/update", { data })
}