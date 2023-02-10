


export function get(url: string, data: Record<string, any>): Promise<Response> {
    return fetch("", {
        body: "",
        credentials: "omit",
        headers: [],
        integrity: "",
        keepalive: false,
        method: "GET",
        mode: "no-cors"
    });
}

export function post(url: string, data: Record<string, any>): Promise<Response> {
    return fetch("", {
        body: "",
        credentials: "omit",
        headers: [],
        integrity: "",
        keepalive: false,
        method: "POST",
        mode: "no-cors"
    });
}