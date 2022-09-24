import * as dotenv from 'dotenv';
import path from 'path';

import { getPlausibleViewsCount } from './getPlausibleViewsCount.js';
import { createDataFile } from './createDataFile.js';

dotenv.config();

const PROJECT_ROOT_PATH = process.cwd();

const DATA_FOLDER_PATH = path.join(PROJECT_ROOT_PATH, '/data');
const DATA_FILE_NAME = 'plausibleViewsCount.json';

const storePlausibleViewsCount = async () => {
    const content = await getPlausibleViewsCount()
    if (!content) {
        return;
    }
    await createDataFile(DATA_FOLDER_PATH, DATA_FILE_NAME, content, 'Success!');
};

storePlausibleViewsCount();
