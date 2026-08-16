import { describe, it, expect } from "vitest";
import worker from "../../src/api/index";
describe("API Healthcheck", () => {
    it("debe responder status healthy en /api/health", async () => {
        const request = new Request("http://localhost/api/health");
        const env = { SECRETS_KV: {} as KVNamespace };

        const response = await worker.fetch(request, env);
        const data = await response.json() as { status: string };
        expect(response.status).toBe(200);
        expect(data.status).toBe("healthy");
    });
});
