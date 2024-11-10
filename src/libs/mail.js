import nodemailer from "nodemailer";

export async function sendMail({
    to,
    name = "Recipient",
    subject,
    body
}) {
    const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

    // Check if SMTP credentials are available
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        console.error("SMTP credentials are missing.");
        return;
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        }
    });

    // Verify the transport connection
    try {
        const testResult = await transport.verify();
        console.log("SMTP connection verified:", testResult);
    } catch (error) {
        console.error("SMTP connection verification failed:", error);
        return;
    }

    // Send the email
    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html: `<p>${body}</p>`
        });
        console.log("Email sent successfully:", sendResult);
    } catch (error) {
        console.error("Failed to send email:", error);
    }
}
