// import nodemailer from "nodemailer";

// type EmailPayload = {
//   to: string;
//   subject: string;
//   html: string;
// };

// // Replace with your SMTP credentials
// const smtpOptions = {
//   host: process.env.EMAIL_SERVER_HOST,
//   port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_SERVER_USER,
//     pass: process.env.EMAIL_SERVER_PASSWORD,
//   },
// };

// export const sendEmail = async (data: EmailPayload) => {
//   const transporter = nodemailer.createTransport({
//     ...smtpOptions,
//   });

//   return await transporter.sendMail({
//     from: process.env.EMAIL_FROM,
//     ...data,
//   });
// };

import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  attachments?: { filename: string; content: Buffer }[];
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  return await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    ...data, // now includes attachments if provided
  });
};


// const smtpOptions = {
//   host: process.env.EMAIL_SERVER_HOST,
//   port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
//   secure: false, // must be false for port 587
//   auth: {
//     user: process.env.EMAIL_SERVER_USER,
//     pass: process.env.EMAIL_SERVER_PASSWORD,
//   },
// }; for outlook
