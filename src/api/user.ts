import { post } from "../request";

export async function getUserInfo() {
    return post("/user/info");
}