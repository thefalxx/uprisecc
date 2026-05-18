// import { sendEmail } from "@/utils/email";

// export async function POST(req: Request) {
//   const { fullName, email, phone, message } = await req.json();

//   if (!fullName || !email || !message) {
//     return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
//   }

//   try {
//     await sendEmail({
//       to: process.env.EMAIL_FROM!,
//       subject: `New message from ${fullName}`,
//       html: `
//         <h2>New Customer Inquiry Submission</h2>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email sending failed:", error);
//     return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
//   }
// }

// app/api/contact/route.ts (Next.js 13+ App Router)

import { sendEmail } from "@/utils/email";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || typeof name !== "string" || name.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid name" }), { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.length > 20) {
      return new Response(JSON.stringify({ error: "Invalid phone" }), { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }
    if (!message || typeof message !== "string" || message.length > 1000) {
      return new Response(JSON.stringify({ error: "Invalid message" }), { status: 400 });
    }

    await sendEmail({
      to: "forcetonxzx@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Customer Inquiry Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ status: "success", message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to send message.", error: error.message }),
      { status: 500 }
    );
  }
}
