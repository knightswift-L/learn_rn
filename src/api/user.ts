import { get, post } from "../request";
import { Result } from "../types/common";
export async function getUserInfo<T>(): Promise<Result<T>> {
    return await get<Result<T>>("/user/info");
}