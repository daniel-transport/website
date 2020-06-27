const encode = data => Object.keys(data)
	.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
	.join('&');

async function formHandler({ name, email, phone, msg, botField }) {
	if (typeof window === 'undefined') return false;

	return new Promise((resolve, reject) => {
		if (!name) reject(new Error('Wpisz nazwę firmy lub imię'));
		if (!email) reject(new Error('Wpisz adres email'));
		if (!phone) reject(new Error('Wpisz numer kontaktowy'));
		if (!msg) reject(new Error('Wpisz wiadomość'));

		const xhr = new window.XMLHttpRequest();

		xhr.open('POST', '', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onreadystatechange = () => {
			if (xhr.status === 200) {
				resolve(
					'Dziękujemy za wysłanie wiadomości, skontaktujemy się wkrótce!',
				);
			} else {
				reject(
					new Error('Niestety wiadmości nie udało się wysłać, spróbuj później'),
				);
			}
		};

		xhr.send(
			encode({
				'form-name': 'contact',
				name,
				email,
				phone,
				msg,
				botField,
			}),
		);
	});
}

export default formHandler;
