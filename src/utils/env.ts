let currentEnv: "pro" | 'dev' | 'test' = 'dev';
export function getEnv() { return currentEnv; }

export function updateEnv(env: "pro" | 'dev' | 'test' = 'dev') {
    currentEnv = env;
}