export abstract class FunctionToolContract {
    abstract type: string;
    abstract function: {
        name: string;
        description: string;
        input_schema: {
            type: string;
            properties: Record<string, unknown>;
            required: string[];
        };
    };

    getSchema(): FunctionToolSchema {
        return {
            type: this.type,
            function: this.function
        };
    }

    abstract execute(args: Record<string, unknown>): Promise<unknown>;
}

export type FunctionToolSchema = Pick<FunctionToolContract, 'type' | 'function'>;