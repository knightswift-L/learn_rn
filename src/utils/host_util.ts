import { Platform } from 'react-native';
import { getEnv } from './env';


export function getHost(): string {
    let host = ""
    switch (getEnv()) {
        case 'dev': host = Platform.OS == 'android' ? "http://10.0.2.2:8080" : "https://127.0.0.1:8080"; break;
        case 'test': host = ""; break;
        case 'pro': host = ""; break;
    }
    return host;

}
