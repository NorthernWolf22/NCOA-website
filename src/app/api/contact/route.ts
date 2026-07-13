import { prisma } from "@/lib/prisma";
import { ContactFormSchema } from "@/validation/contact";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const result = ContactFormSchema.safeParse(body); //server-side validation essential because the clientside validation can be hacked, this cannot. 

    if (!result.success) {
        return NextResponse.json(
            {
                errors: result.error.issues
            },
            {
                status: 400,
            }
        );
    }

    const contact = await prisma.contactForm.create({
        data: result.data,
    });

    return NextResponse.json(contact, {
        status: 201,
    });
}

