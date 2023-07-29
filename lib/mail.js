import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.ethereal.email',
    port: 587,
	secure: false,
    auth: {
        user: 'leanna.lind38@ethereal.email',
        pass: 'cS2A5Kz4N4GUaZdztN',
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'Dance Studio <yejeeo@yandex.ru>'
});

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;