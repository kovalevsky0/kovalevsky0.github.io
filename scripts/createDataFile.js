import path from 'path';
import { existsSync } from 'fs';
import { writeFile, mkdir } from 'fs/promises';

export const createDataFile = async (folderPath, fileName, content, successMessage = 'Success!') => {
    const filePath = path.join(folderPath, fileName);

    try {
        if (!existsSync(folderPath)) {
            await mkdir(folderPath);
        }

        await writeFile(filePath, content, 'utf-8');
        console.log(`✅ ${successMessage}`);
    } catch(e) {
        console.error(`🔴 ${e}`);
    }
}
