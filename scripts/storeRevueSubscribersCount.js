import * as dotenv from 'dotenv';
import path from 'path';

import { getRevueSubscribersCount } from './getRevueSubscribersCount.js';
import { createDataFile } from './createDataFile.js';

dotenv.config();

const PROJECT_ROOT_PATH = process.cwd();

const DATA_FOLDER_PATH = path.join(PROJECT_ROOT_PATH, '/data');
const DATA_FILE_NAME = 'revueSubscribersCount.json';

const storeRevueSubscribersCount = async () => {
    const count = await getRevueSubscribersCount()
    if (!count) {
        return;
    }
    await createDataFile(DATA_FOLDER_PATH, DATA_FILE_NAME, `{\n\t"count": ${count}\n}`, 'Success!');
};

storeRevueSubscribersCount();
