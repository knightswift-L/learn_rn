import GlobalData from "../config/global";

const defaultHeader = {};
let currentEnv: "pro" | 'dev' | 'test' = 'dev';

function getHost(): string {
    let host = ""
    switch (currentEnv) {
        case 'dev': host = "https://api.spacexdata.com"; break;
        case 'test': host = ""; break;
        case 'pro': host = ""; break;
    }
    return host;

}
export type RequestOptions = {
    parameter?: Record<string, any>,
    data?: Record<string, any>,
    header?: Record<string, any>,
}

export function updateEnv(env: "pro" | 'dev' | 'test' = 'dev') {
    currentEnv = env;
}

export function get(url: string, options?: RequestOptions): Promise<Response> {
    return combineParameters(url, "GET", options);
}

export function post(url: string, options?: RequestOptions): Promise<Response> {
    return combineParameters(url, "POST", options);
}

function combineParameters(path: string, method: string, options?: RequestOptions): Promise<any> {
    let host = getHost();
    let requestUrl = `${host}${path}`;

    let targetHeader = defaultHeader;
    const { data, parameter, header: custom } = options ?? {};
    if (custom) {
        targetHeader = Object.assign({}, defaultHeader, custom);
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
            body: method == "POST" && data ? JSON.stringify(data) : null,
            credentials: "omit",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication':GlobalData.token ?? ""
            },
            integrity: "",
            keepalive: false,
            method: method,
            mode: "no-cors"
        });

        const { headers, url } = response;
        var result = await response.json();
        printLog(url, result, headers);

        if (response.status == 200) {
            resolve(result);
        } else {
            reject(Error(response.statusText))
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