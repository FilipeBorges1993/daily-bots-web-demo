import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createTool(toolName: string) {
    const toolFileName = `${toolName.replace(/\s+/g, '_')}.ts`;
    const toolFilePath = path.join(__dirname, '..', 'app', 'tools', toolFileName);

    const toolContent = `
import { FunctionToolContract } from "./abstract/function-tool-contract";

interface Args {
    // Add your argument types here
}

function isValidArgs(args: unknown): args is Args {
    // Add your argument validation logic here
    return true;
}

export class ${toolName}Tool extends FunctionToolContract {
    type: string = "function";
    function = {
        name: "${toolName.toLowerCase().replace(/\s+/g, '_')}",
        description: "Description of ${toolName}",
        input_schema: {
            type: "object",
            properties: {
                // Add your input properties here
            },
            required: [],
        },
    };

    async execute(args: unknown): Promise<string> {
        if (!isValidArgs(args)) {
            throw new Error('Invalid arguments provided');
        }

        console.log("Executing ${toolName} Tool");

        try {
            // Add your tool logic here
            return "Result from ${toolName} Tool";
        } catch (error) {
            console.error("Error in ${toolName} Tool:", error);
            throw error;
        }
    }
}
`;

    fs.writeFileSync(toolFilePath, toolContent);
    console.log(`Created ${toolFileName} in app/tools directory.`);

    // Update index.ts
    const indexFilePath = path.join(__dirname, '..', 'app', 'tools', 'index.ts');
    let indexContent = fs.readFileSync(indexFilePath, 'utf-8');

    const importStatement = `import { ${toolName}Tool } from "./${toolFileName.replace('.ts', '')}";`;
    const newToolInstance = `const ${toolName.toLowerCase()}Tool = new ${toolName}Tool()`;
    const updatedTools = `export const tools = [\n    scraperTool,\n    ${toolName.toLowerCase()}Tool\n]`;

    indexContent = `${importStatement}\n${indexContent}`;
    indexContent = indexContent.replace(/const scraperTool = new ScraperTool\(\)/, `const scraperTool = new ScraperTool()\n${newToolInstance}`);
    indexContent = indexContent.replace(/export const tools = \[[\s\S]*?\]/, updatedTools);

    fs.writeFileSync(indexFilePath, indexContent);
    console.log(`Updated index.ts with the new tool.`);
}

function main() {
    rl.question('Enter the name of the new tool: ', (toolName) => {
        createTool(toolName);
        rl.close();
    });
}

main();