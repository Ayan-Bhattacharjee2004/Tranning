require("dotenv").config()
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ayanbhattacharjee2004@gmail.com",
        pass: "iksh hprb czsk wijc"
    }
})
const recipients = [
    "aptacmp@gmail.com",
    "younussk1290@gmail.com"
]

async function sendmailtoall() {
    for (const r of recipients) {
        const mailformat = {
            from: "ayanbhattacharjee2004@gmail.com",
            to: r,
            subject: "greeding",
            text: `hello ${r},\n\n i am from ardent computech`
        }

        try {
            const info = await transporter.sendMail(mailformat);
            console.log(`email is sending to ${r} and the mail is ${info}`)
        } catch (err) {
            console.log(err)
        }
    }
}
sendmailtoall()