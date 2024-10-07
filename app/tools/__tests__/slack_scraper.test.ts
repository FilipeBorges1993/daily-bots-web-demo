import { ScraperTool } from '../SlackScraper';

// Mock the global fetch function
global.fetch = jest.fn();

describe('ScraperTool', () => {
    let scraperTool: ScraperTool;

    beforeEach(() => {
        scraperTool = new ScraperTool();
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    it('should execute and return emails', async () => {
        const mockEmails = 'email1@example.com, email2@example.com';

        // Mock the fetch function to return a successful response
        (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({ content: mockEmails }),
        } as unknown as Response);

        const result = await scraperTool.execute({ stringTest: 'test', numberTest: 123 });

        expect(result).toBe(mockEmails);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://wingmaite.app.n8n.cloud/webhook-test/output/emails',
            expect.objectContaining({
                method: 'GET',
                headers: expect.objectContaining({
                    'Authorization': expect.any(String),
                }),
            })
        );
    });

    it('should throw an error when fetch fails', async () => {
        // Mock the fetch function to return an error response
        (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: false,
            status: 404,
        } as Response);

        await expect(scraperTool.execute({ stringTest: 'test', numberTest: 123 })).rejects.toThrow('HTTP error! status: 404');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when network request fails', async () => {
        // Mock the fetch function to throw a network error
        (global.fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(new Error('Network error'));

        await expect(scraperTool.execute({ stringTest: 'test', numberTest: 123 })).rejects.toThrow('Network error');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when response format is invalid', async () => {
        // Mock the fetch function to return an invalid response format
        (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({ invalidKey: 'invalid data' }),
        } as unknown as Response);

        await expect(scraperTool.execute({ stringTest: 'test', numberTest: 123 })).rejects.toThrow('Invalid response format');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when content is not a string', async () => {
        // Mock the fetch function to return a non-string content
        (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({ content: 123 }),
        } as unknown as Response);

        await expect(scraperTool.execute({ stringTest: 'test', numberTest: 123 })).rejects.toThrow('Content is not a string');
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when invalid arguments are provided', async () => {
        await expect(scraperTool.execute({ invalidArg: 'test' })).rejects.toThrow('Invalid arguments provided');
        expect(global.fetch).not.toHaveBeenCalled();
    });
});