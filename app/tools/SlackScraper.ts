import axios from 'axios';
import { Buffer } from 'buffer';

import { FunctionToolContract } from "./abstract/function-tool-contract";

interface Args {
    stringTest: string;
    numberTest: number;
}
// Helper
function isValidArgs(args: unknown): args is Args {
    return (
        typeof args === 'object' &&
        args !== null &&
        'stringTest' in args &&
        'numberTest' in args &&
        typeof (args as Args).stringTest === 'string' &&
        typeof (args as Args).numberTest === 'number'
    );
}

export class ScraperTool extends FunctionToolContract {
    type: string = "function";
    function = {
        name: "get_emails",
        description: "Get emails from the webhook",
        input_schema: {
            type: "object",
            properties: {
                stringTest: {
                    type: "string",
                    description: "Just a string test",
                },
                numberTest: {
                    type: "number",
                    description: "just a number test",
                },
            },
            required: ["stringTest", "numberTest"],
        },
    };

    async execute(args: unknown): Promise<string> {
        // Validate args
        if (!isValidArgs(args)) {
            throw new Error('Invalid arguments provided');
        }

        console.log("Executing Slack Scraper Tool");

        try {

            const response = await axios.get('/api/n8n');

            const data = response.data;
            if (!data || typeof data !== 'object' || !('content' in data)) {
                throw new Error('Invalid response format');
            }
            const emails = data.content;
            if (typeof emails !== 'string') {
                throw new Error('Content is not a string');
            }

            console.log("Received emails:", emails);
            return emails;
        } catch (error) {
            console.error("Error fetching emails:", error);
            throw error;
        }
    }
}
