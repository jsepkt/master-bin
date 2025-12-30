import { NextResponse } from 'next/server';
import { z } from 'zod';

// Schema Validation (Security Layer)
const contactSchema = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    service: z.string(),
    message: z.string().optional(),
});

export async function POST(request) {
    try {
        const body = await request.json();

        // 1. Validate Data
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.errors },
                { status: 400 }
            );
        }

        const data = result.data;

        // 2. Simulate Email Send (Replace this with Resend/SendGrid later)
        console.log('--- EMAIL SIMULATION ---');
        console.log(`To: owner@masterbin.com`);
        console.log(`From: ${data.email}`);
        console.log(`Subject: New Quote Request - ${data.service}`);
        console.log(`Body: ${JSON.stringify(data, null, 2)}`);
        console.log('------------------------');

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: 'Quote request sent!' });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
