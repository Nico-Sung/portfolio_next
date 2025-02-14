import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const adminResponse = await resend.emails.send({
            from: "noreply@sungnicolas.fr",
            to: "nicolassung01@gmail.com",
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        console.log("Admin email sent:", adminResponse);

        const userResponse = await resend.emails.send({
            from: "noreply@sungnicolas.fr",
            to: email,
            subject: "Thank you for your message!",
            text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\n Sung Nicolas`,
        });
        console.log("User email sent:", userResponse);

        return Response.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error: unknown) {
        if (error instanceof Error) {
            return Response.json(
                { message: "Failed to send email.", error: error.message },
                { status: 500 }
            );
        } else {
            return Response.json(
                { message: "Failed to send email.", error: String(error) },
                { status: 500 }
            );
        }
    }
}
