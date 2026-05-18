import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const license = formData.get("license")?.toString() || "";
    const summary = formData.get("summary")?.toString() || "";

    const file = formData.get("resume") as File;

    let attachment = null;

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = {
        filename: file.name,
        content: buffer,
      };
    }

    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM!,
      subject: `New Job Application from ${fullName}`,
      html: `
        <h3>New Application Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>License:</strong> ${license}</p>
        <p><strong>Work Summary:</strong> ${summary}</p>
      `,
      attachments: attachment ? [attachment] : [],
    });

    return NextResponse.json({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Error handling apply form:", error);
    return NextResponse.json(
      { error: "Failed to send application" },
      { status: 500 }
    );
  }
}
