import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();

const { REVUE_API_KEY, REVUE_BASE_API_URL, REVUE_API_VERSION } = process.env;

export const getRevueSubscribersCount = async () => {    
    try {
        const response = await fetch(`${REVUE_BASE_API_URL}/${REVUE_API_VERSION}/subscribers`, {
            headers: {
                'Authorization': `Token ${REVUE_API_KEY}`,
            },
        });
        const data = await response.json();

        if (!data || !data.length) {
            return 0;
        }

        return data.length;
    } catch (e) {
        console.error(`🔴 ${e}`);
    }
};

