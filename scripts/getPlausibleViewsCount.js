import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();

const { PLAUSIBLE_KEY, PLAUSIBLE_SITE_ID, PLAUSIBLE_API_URL, PLAUSIBLE_API_VERSION } = process.env;

export const getPlausibleViewsCount = async () => {    
    try {
        const response = await fetch(`${PLAUSIBLE_API_URL}/${PLAUSIBLE_API_VERSION}/stats/breakdown?site_id=${PLAUSIBLE_SITE_ID}&property=event:page`, {
            headers: {
                'Authorization': `Bearer ${PLAUSIBLE_KEY}`,
            },
        });
        const data = await response.json();

        if (!data || !data.results) {
            return;
        }

        const fileContent = data.results.reduce((prevVal, currentVal) => {
            return {
                ...prevVal,
                [currentVal.page]: currentVal.visitors,
            };
        }, {});

        return JSON.stringify(fileContent);
    } catch (e) {
        console.error(`🔴 ${e}`);
    }
};


getPlausibleViewsCount();