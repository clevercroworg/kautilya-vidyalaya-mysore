import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      parentName,
      name,
      fullName,
      childName,
      studentName,
      phone,
      email,
      selectedClass,
      childGrade,
      grade,
      location,
      city,
      message,
      memories,
      passingYear,
      degree,
      profession,
      referral1Name,
      referral1Contact,
      referral2Name,
      referral2Contact,
      source = "Website Form",
    } = body;

    const isAlumni = source.toLowerCase().includes("alumni");
    const applicantName = fullName || parentName || name || "Not Provided";
    const applicantPhone = phone || "Not Provided";
    const applicantEmail = email || "Not Provided";

    // Basic validation
    if (!phone && !email) {
      return NextResponse.json(
        { error: "Phone number or Email is required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    // Recipient routing: Alumni submissions go specifically to enquiry@kautilyavidyalaya.edu.in
    const recipientEmail = isAlumni
      ? (process.env.ALUMNI_EMAIL_TO || "enquiry@kautilyavidyalaya.edu.in")
      : (process.env.EMAIL_TO || "admissions@kautilyavidyalaya.edu.in, enquiry@kautilyavidyalaya.edu.in");

    if (!gmailUser || !gmailAppPassword) {
      console.warn(
        "[Contact API] GMAIL_USER or GMAIL_APP_PASSWORD environment variable not set. Form received but email dispatch pending credentials."
      );
      return NextResponse.json({
        success: true,
        message: "Enquiry recorded. Email notification pending environment configuration.",
        receivedData: {
          name: applicantName,
          phone: applicantPhone,
          email: applicantEmail,
          source,
        },
      });
    }

    // Configure Nodemailer transporter for Gmail / Google Workspace
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const timestampIST = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata",
    }).format(new Date());

    let subject = "";
    let textContent = "";
    let htmlContent = "";

    if (isAlumni) {
      const yearBatch = passingYear ? `Class of ${passingYear}` : "Alumni";
      subject = `New Alumni Registration: ${applicantName} (${yearBatch}) - Kautilya Vidyalaya`;

      const referralsList = [
        referral1Name || referral1Contact ? `${referral1Name || "Alumnus"} (${referral1Contact || "No contact"})` : null,
        referral2Name || referral2Contact ? `${referral2Name || "Alumnus"} (${referral2Contact || "No contact"})` : null,
      ]
        .filter(Boolean)
        .join(", ");

      textContent = `New Alumni Registration:
Name: ${applicantName}
Email: ${applicantEmail}
Phone: ${applicantPhone}
Year of Passing / Batch: ${passingYear || "Not Specified"}
Higher Education / Degree: ${degree || "Not Provided"}
Current Profession / Organisation: ${profession || "Not Provided"}
Current City & Country: ${city || location || "Not Provided"}
Time: ${timestampIST}

Fondest Memory / Message:
${memories || message || "None"}

Fellow Alumni Referrals:
${referralsList || "None"}
`;

      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
              .header { background: #001744; padding: 28px 24px; text-align: center; }
              .header h1 { color: #f59e0b; margin: 0 0 6px 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
              .header p { color: #cbd5e1; margin: 0; font-size: 14px; }
              .body-content { padding: 28px 24px; }
              .badge { display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
              td.label { width: 38%; font-weight: 700; color: #475569; background-color: #f8fafc; }
              td.value { color: #0f172a; }
              .message-box { background: #f8fafc; border-left: 4px solid #f59e0b; padding: 14px 16px; border-radius: 6px; margin-top: 10px; font-size: 14px; color: #334155; line-height: 1.6; }
              .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>KAUTILYA ALUMNI ASSOCIATION</h1>
                <p>Official Alumni Forum Registration</p>
              </div>
              <div class="body-content">
                <span class="badge">Source: ${source}</span>
                <p style="margin-top: 0; font-size: 15px; color: #334155;">
                  A new alumnus has registered their profile on the official Kautilya Vidyalaya website:
                </p>
                <table>
                  <tr>
                    <td class="label">Alumnus Name</td>
                    <td class="value"><strong>${applicantName}</strong></td>
                  </tr>
                  <tr>
                    <td class="label">Passing Year / Batch</td>
                    <td class="value"><strong>${passingYear || "Not Specified"}</strong></td>
                  </tr>
                  <tr>
                    <td class="label">Email Address</td>
                    <td class="value"><a href="mailto:${applicantEmail}" style="color: #0284c7; text-decoration: none;">${applicantEmail}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Contact Phone</td>
                    <td class="value"><a href="tel:${applicantPhone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${applicantPhone}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Higher Education / Degree</td>
                    <td class="value">${degree || "Not Provided"}</td>
                  </tr>
                  <tr>
                    <td class="label">Profession / Organisation</td>
                    <td class="value">${profession || "Not Provided"}</td>
                  </tr>
                  <tr>
                    <td class="label">Current City &amp; Country</td>
                    <td class="value">${city || location || "Not Provided"}</td>
                  </tr>
                  <tr>
                    <td class="label">Referrals</td>
                    <td class="value">${referralsList || "None"}</td>
                  </tr>
                  <tr>
                    <td class="label">Registered On</td>
                    <td class="value">${timestampIST}</td>
                  </tr>
                </table>
                <div style="margin-top: 20px;">
                  <strong style="font-size: 13px; color: #475569; text-transform: uppercase;">Fondest Memory / Message for Kautilya:</strong>
                  <div class="message-box">
                    ${(memories || message || "No message provided.").replace(/\n/g, "<br/>")}
                  </div>
                </div>
              </div>
              <div class="footer">
                Automated notification sent to enquiry desk (${recipientEmail}).
              </div>
            </div>
          </body>
        </html>
      `;
    } else {
      const applicantChild = childName || studentName || "Not Specified";
      const applicantGrade = selectedClass || childGrade || grade || "Not Specified";
      const applicantLocation = location || city || "Not Specified";
      const applicantMessage = message || "No additional message provided.";

      subject = `New Enquiry from ${applicantName} (${applicantGrade}) - Kautilya Vidyalaya`;
      textContent = `New Website Enquiry:\n\nParent: ${applicantName}\nChild: ${applicantChild}\nPhone: ${applicantPhone}\nEmail: ${applicantEmail}\nGrade: ${applicantGrade}\nLocation: ${applicantLocation}\nSource: ${source}\nTime: ${timestampIST}\n\nMessage:\n${applicantMessage}`;

      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
              .header { background: #001744; padding: 28px 24px; text-align: center; }
              .header h1 { color: #f59e0b; margin: 0 0 6px 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
              .header p { color: #cbd5e1; margin: 0; font-size: 14px; }
              .body-content { padding: 28px 24px; }
              .badge { display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; }
              table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
              td.label { width: 35%; font-weight: 700; color: #475569; background-color: #f8fafc; }
              td.value { color: #0f172a; }
              .message-box { background: #f8fafc; border-left: 4px solid #f59e0b; padding: 14px 16px; border-radius: 6px; margin-top: 10px; font-size: 14px; color: #334155; line-height: 1.6; }
              .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>KAUTILYA VIDYALAYA</h1>
                <p>Official Website Admission &amp; Enquiry Desk</p>
              </div>
              <div class="body-content">
                <span class="badge">Source: ${source}</span>
                <p style="margin-top: 0; font-size: 15px; color: #334155;">
                  A new inquiry has been submitted through the official school website. Details below:
                </p>
                <table>
                  <tr>
                    <td class="label">Parent Name</td>
                    <td class="value"><strong>${applicantName}</strong></td>
                  </tr>
                  <tr>
                    <td class="label">Child / Student Name</td>
                    <td class="value">${applicantChild}</td>
                  </tr>
                  <tr>
                    <td class="label">Contact Phone</td>
                    <td class="value"><a href="tel:${applicantPhone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${applicantPhone}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Email Address</td>
                    <td class="value"><a href="mailto:${applicantEmail}" style="color: #0284c7; text-decoration: none;">${applicantEmail}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Class / Grade</td>
                    <td class="value"><strong>${applicantGrade}</strong></td>
                  </tr>
                  <tr>
                    <td class="label">Location / City</td>
                    <td class="value">${applicantLocation}</td>
                  </tr>
                  <tr>
                    <td class="label">Received On</td>
                    <td class="value">${timestampIST}</td>
                  </tr>
                </table>
                <div style="margin-top: 20px;">
                  <strong style="font-size: 13px; color: #475569; text-transform: uppercase;">Message / Queries:</strong>
                  <div class="message-box">
                    ${applicantMessage.replace(/\n/g, "<br/>")}
                  </div>
                </div>
              </div>
              <div class="footer">
                This is an automated notification from the Kautilya Vidyalaya Mysuru website enquiry system.
              </div>
            </div>
          </body>
        </html>
      `;
    }

    const senderTitle = isAlumni ? "Kautilya Alumni Desk" : "Kautilya Vidyalaya Admissions Desk";

    await transporter.sendMail({
      from: `"${senderTitle}" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: applicantEmail !== "Not Provided" ? applicantEmail : undefined,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Submitted and emailed successfully.",
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("[Contact API Error]:", err);
    return NextResponse.json(
      { error: "Failed to process enquiry.", details: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
