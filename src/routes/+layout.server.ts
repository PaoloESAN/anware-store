import { BYPASS_TOKEN } from '$env/static/private';

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
    isr: {
        expiration: false,
        bypassToken: BYPASS_TOKEN,
        allowQuery: ['page']
    }
};