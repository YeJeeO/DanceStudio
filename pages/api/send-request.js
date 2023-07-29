import sendEmail from './lib/mail.js';

export default async function handler(req, res) {
	const message = {
		to: 'yejeeo@yandex.ru',
		subject: `Письмо с сайта DanceStudio от ${req.body.name}`,
		text: `
			Имя: ${req.body.name}, 
        	Телефон: ${req.body.phone},
           	Сообщение: ${req.body.message},
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.name}!`);
}