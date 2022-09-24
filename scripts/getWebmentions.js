import fetch from 'node-fetch';
import got from 'got';
import * as dotenv from 'dotenv';

dotenv.config();

const { WEBMENTION_API_KEY, SITE_URL } = process.env;

(async () => {
    try {
        // const response = await fetch(`https://webmention.io/api/mentions.jf2?domain=${SITE_URL}&token=${WEBMENTION_API_KEY}`);
        // const data = await response.json();
        // console.log(data);
        const response = await got('https://webmention.io/api/mentions.jf2', {
            responseType: 'json',
            searchParams: {
                domain: SITE_URL,
                'per-page': 1000,
                token: WEBMENTION_API_KEY
            }
        });

        console.log('Webmentions!', response.body.children);
        
    } catch(e) {
        console.error(`🔴 ${e}`);
    }
})();
