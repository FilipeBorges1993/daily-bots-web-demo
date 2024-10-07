import { exec } from 'child_process';

export function createNewTool() {
    console.log('Creating a new tool...');
    exec('ts-node utils/create_tool.ts', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
}

// You can call this function when you want to create a new tool
// createNewTool();
