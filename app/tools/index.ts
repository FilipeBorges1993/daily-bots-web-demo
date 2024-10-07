// This file will be an wrapper for all the tools that we want to use in the project
import { FunctionCallParams, LLMHelper } from "realtime-ai";

import { SendEmailTool } from "./SendEmail";
import { ScraperTool } from "./SlackScraper";
const scraperTool = new ScraperTool()
const sendemailTool = new SendEmailTool()


export const tools = [
    scraperTool,
    sendemailTool
]

export const toolsSchema = tools.map(tool => tool.getSchema())

export function init(llmHelper: LLMHelper) {
    llmHelper.handleFunctionCall(async (fn: FunctionCallParams) => {
        const args = fn.arguments as any;
        for (const tool of tools) {
            if (fn.functionName === tool.function.name) {
                try {
                    return await tool.execute(args);
                } catch (error) {
                    console.error(`Error executing tool ${fn.functionName}:`, error);
                    throw error;
                }
            }
        }
        throw new Error(`Function ${fn.functionName} not found`);
    });
}


