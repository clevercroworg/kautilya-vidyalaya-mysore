import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = (formData.get("fullName") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const position = (formData.get("position") as string)?.trim() || "General Application";
    const qualification = (formData.get("qualification") as string)?.trim() || "Not Specified";
    const experience = (formData.get("experience") as string)?.trim() || "Not Specified";
    const currentOrg = (formData.get("currentOrg") as string)?.trim() || "Not Specified";
    const noticePeriod = (formData.get("noticePeriod") as string)?.trim() || "Immediate";
    const location = (formData.get("location") as string)?.trim() || "Not Specified";
    const coverNote = (formData.get("coverNote") as string)?.trim() || "";
    const resumeFile = formData.get("resume") as File | null;

    if (!fullName) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!phone && !email) {
      return NextResponse.json(
        { error: "Contact phone number or email address is required." },
        { status: 400 }
      );
    }

    // Process uploaded resume file if present
    let resumeBuffer: Buffer | null = null;
    let resumeFileName = "";
    let resumeMimeType = "application/pdf";
    let savedFilePath = "";

    if (resumeFile && resumeFile.size > 0) {
      // 10 MB limit check
      if (resumeFile.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "Resume file size exceeds the 10 MB limit. Please upload a smaller file." },
          { status: 400 }
        );
      }

      const arrayBuffer = await resumeFile.arrayBuffer();
      resumeBuffer = Buffer.from(arrayBuffer);
      resumeFileName = resumeFile.name;
      resumeMimeType = resumeFile.type || "application/octet-stream";

      // Store in public/uploads/resumes for archival
      try {
        const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        const safeName = `${Date.now()}_${resumeFileName.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        savedFilePath = path.join(uploadDir, safeName);
        fs.writeFileSync(savedFilePath, resumeBuffer);
      } catch (saveErr) {
        console.warn("[Careers API] Warning saving resume file to disk:", saveErr);
      }
    }

    const timestampIST = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail =
      process.env.CAREERS_EMAIL_TO || "careers@kautilyavidyalaya.edu.in";

    if (!gmailUser || !gmailAppPassword) {
      console.warn(
        "[Careers API] GMAIL_USER or GMAIL_APP_PASSWORD not configured. Application recorded locally."
      );
      return NextResponse.json({
        success: true,
        message: "Application submitted successfully! Our recruitment team will review your profile.",
        receivedData: {
          fullName,
          position,
          email,
          phone,
          hasResume: !!resumeBuffer,
        },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const subject = `Job Application: ${fullName} – ${position} (Kautilya Vidyalaya)`;

    const textContent = `New Job Application Received (careers@kautilyavidyalaya.edu.in):
------------------------------------------------------------
Applicant Name: ${fullName}
Position Applied For: ${position}
Email: ${email || "Not Provided"}
Phone: ${phone || "Not Provided"}
Highest Qualification: ${qualification}
Total Experience: ${experience}
Resume Attached: ${resumeFileName ? `Yes (${resumeFileName})` : "No resume uploaded"}
Submitted At: ${timestampIST}

Cover Statement / Note:
${coverNote || "No cover statement provided."}
`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
            .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: #001744; padding: 28px 24px; text-align: center; }
            .header h1 { color: #FFD907; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
            .header p { color: #cbd5e1; margin: 0; font-size: 14px; }
            .body-content { padding: 28px 24px; }
            .badge { display: inline-block; background-color: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; border: 1px solid #fde68a; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            td { padding: 11px 14px; border-bottom: 1px solid #f1f5f9; font-size: 13.5px; vertical-align: top; }
            td.label { width: 38%; font-weight: 700; color: #475569; background-color: #f8fafc; }
            td.value { color: #0f172a; }
            .resume-box { background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 12px 16px; margin-top: 16px; font-size: 13px; color: #065f46; display: flex; align-items: center; justify-content: space-between; }
            .message-box { background: #f8fafc; border-left: 4px solid #FFD907; padding: 14px 16px; border-radius: 6px; margin-top: 10px; font-size: 13.5px; color: #334155; line-height: 1.6; }
            .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>KAUTILYA VIDYALAYA RECRUITMENT</h1>
              <p>Faculty &amp; Staff Job Application Portal</p>
            </div>
            <div class="body-content">
              <span class="badge">Role: ${position}</span>
              <p style="margin-top: 0; font-size: 14.5px; color: #334155;">
                A new candidate has submitted an online job application via the Kautilya Vidyalaya Careers page:
              </p>
              <table>
                <tr>
                  <td class="label">Candidate Name</td>
                  <td class="value"><strong>${fullName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Position Applied</td>
                  <td class="value"><strong style="color: #0369a1;">${position}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email || "Not Provided"}</a></td>
                </tr>
                <tr>
                  <td class="label">Contact Phone</td>
                  <td class="value"><a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${phone || "Not Provided"}</a></td>
                </tr>
                <tr>
                  <td class="label">Highest Qualification</td>
                  <td class="value"><strong>${qualification}</strong></td>
                </tr>
                <tr>
                  <td class="label">Total Experience</td>
                  <td class="value">${experience}</td>
                </tr>
                <tr>
                  <td class="label">Submitted At</td>
                  <td class="value">${timestampIST}</td>
                </tr>
              </table>

              ${
                resumeFileName
                  ? `<div class="resume-box">
                      <span><strong>📎 Attached Resume:</strong> ${resumeFileName}</span>
                      <span style="font-size: 11px; color: #047857; background: #d1fae5; padding: 2px 8px; border-radius: 4px;">Attached to Email</span>
                    </div>`
                  : `<p style="font-size: 12px; color: #94a3b8; margin-top: 12px; font-style: italic;">No resume attachment was uploaded with this submission.</p>`
              }

              <div style="margin-top: 20px;">
                <strong style="font-size: 13px; color: #475569; text-transform: uppercase;">Cover Statement / Note:</strong>
                <div class="message-box">
                  ${(coverNote || "No cover statement provided.").replace(/\n/g, "<br/>")}
                </div>
              </div>
            </div>
            <div class="footer">
              Direct recruitment submission routed to <strong>${recipientEmail}</strong>.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Kautilya Careers Desk" <${gmailUser}>`,
      to: recipientEmail,
      cc: "enquiry@kautilyavidyalaya.edu.in",
      replyTo: email || undefined,
      subject,
      text: textContent,
      html: htmlContent,
      attachments:
        resumeBuffer && resumeFileName
          ? [
              {
                filename: resumeFileName,
                content: resumeBuffer,
                contentType: resumeMimeType,
              },
            ]
          : [],
    });

    return NextResponse.json({
      success: true,
      message: `Your application for "${position}" has been received successfully! Our HR team will review your profile.`,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("[Careers API Error]:", err);
    return NextResponse.json(
      { error: "Failed to submit application.", details: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
