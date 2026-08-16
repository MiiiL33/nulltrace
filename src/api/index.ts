export interface Env {
    SECRETS_KV: KVNamespace;
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url);

        if (url.pathname === "/api/health") {
            return new Response(JSON.stringify({ status: "healthy", timestamp: new Date().toISOString() }), {
                headers: { "Content-Type": "application/json" }
            });
        }

        if (url.pathname === "/api/secret" && request.method === "POST") {
            return new Response(JSON.stringify({ message: "Endpoint listo para implementar" }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ error: "Not Found" }), { status: 404 });
    }
};