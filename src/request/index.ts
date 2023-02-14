import GlobalData from "../config/global";

const defaultHeader = {};
let currentEnv: "pro" | 'dev' | 'test' = 'dev';

function getHost(): string {
    let host = ""
    switch (currentEnv) {
        case 'dev': host = "http://localhost:8080"; break;
        case 'test': host = ""; break;
        case 'pro': host = ""; break;
    }
    return host;

}
export type RequestOptions = {
    parameter?: Record<string, any>,
    data?: Record<string, any>,
    header?: Record<string, any>,
    isFormData: boolean
}

export function updateEnv(env: "pro" | 'dev' | 'test' = 'dev') {
    currentEnv = env;
}

export function get<T>(url: string, options?: RequestOptions): Promise<T> {
    return combineParameters<T>(url, "GET", options);
}

export function post<T>(url: string, options?: RequestOptions): Promise<T> {
    return combineParameters<T>(url, "POST", options);
}

function combineParameters<T>(path: string, method: string, options?: RequestOptions): Promise<T> {
    let host = getHost();
    let requestUrl = `${host}${path}`;

    let targetHeader = Object.assign({}, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': GlobalData.token ?? ""
    });
    const { data, parameter, header: custom } = options ?? {};

    if (custom) {
        targetHeader = Object.assign({}, targetHeader, custom);
    }
    if (method == "GET" && parameter) {
        requestUrl = requestUrl + "?" + Object.entries(parameter).map((key, value) => {
            if (Object.is(value, Array<any>)) {
                return (value as unknown as Array<any>).map((item: any) => `${key}=${item}`).join("&");
            } else {
                return `${key}:${JSON.stringify(value)}`;
            }

        }).join("&");
    }
    if (currentEnv == 'dev') {
        printLog(requestUrl, data ?? parameter ?? {}, targetHeader);
    }
    return new Promise(async (resolve, reject) => {
        let response: Response = await fetch(requestUrl, {
            body: method == "POST" ? options?.isFormData ? data as FormData : JSON.stringify(data) : null,
            credentials: "omit",
            headers: targetHeader,
            integrity: "",
            keepalive: false,
            method: method,
            mode: "cors",
        });

        try {
            const { headers, url } = response;
            console.log(response.status)
            if (response.status == 200) {
                var json = await response.json();
                if (currentEnv == 'dev') {
                    printLog(url, json, headers);
                }
                resolve(json);
            } else {
                reject(Error(response.statusText))
            }
        } catch (error) {
            console.log(error);
            reject(Error(JSON.stringify(error)))
        }
    })
}

function printLog(url: string, data: Record<string, any>, header: Record<string, any>) {
    console.log(`${Date.now().toLocaleString()}\n`)
    console.log(url + "\n");
    for (const [key, value] of Object.entries(header)) {
        console.log(`${key}:${JSON.stringify(value)}\n`);
    }
    console.log(`Data:${JSON.stringify(data)}\n`);
}