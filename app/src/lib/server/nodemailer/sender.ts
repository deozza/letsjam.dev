import transporter from "$lib/server/nodemailer/transporter"; 

export const defaultEmailSender = async (from: string, to: string, subject: string, text: string, html: string, replyTo: string | undefined) => {
  const info = await transporter.sendMail({
    from, // sender address
    to, // list of recipients
    subject, // subject line
    text, // plain text body
    html, // HTML body
    replyTo
  })
  .then((value) => {
    return value;
  })
  .catch(err => {
    console.log(err)
  })

  return info;
};


