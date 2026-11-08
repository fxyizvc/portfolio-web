import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, _gotcha } = body;

        // Honeypot check: Bots fill hidden inputs
        if (_gotcha) {
            return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
        }

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, valid email, and message are required." },
                { status: 400 }
            );
        }

        const formspreeKey = process.env.FORMSPREE_KEY || "mpqjdanl";

        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                _subject: `New Portfolio Inquiry from ${name}`,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json(
                { error: errorData?.error || "Failed to dispatch message" },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err: any) {
        return NextResponse.json(
            { error: "Internal server error occurred." },
            { status: 500 }
        );
    }
}
