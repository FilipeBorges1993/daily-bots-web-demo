import { Buffer } from 'buffer';

export async function GET(request: Request) {
    const url = 'https://xmjhfcqlhrgjcwjcojai.supabase.co/functions/v1/anthropic-agent';
    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtamhmY3FsaHJnamN3amNvamFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MDU1OTMsImV4cCI6MjA0MzI4MTU5M30.OMdl8iP16ab4UiiSh0hc194xpC4irOn9rLh3s49INxM";

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${bearerToken}`,
        },
        body: JSON.stringify({ "message": "Give me a overview of the emails" }),
    });

    const res = await req.json();

    if (req.status !== 200) {
        console.log(res)
    }

    return Response.json(res);
}
