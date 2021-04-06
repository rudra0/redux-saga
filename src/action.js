import { INCREMENT } from "./reducers";

export function increment(data)
{
    return {
        type: 'INCREMENT',
        payload: data
    }
}

export function auth(data)
{
    return {
        type: 'AUTHENTICATION',
        payload: data
    }
}