$(document).ready(function () {
	$('#contact-form').submit(function (e) {
		// Lấy dữ liệu từ form
		e.preventDefault()
		const formData = {
			name: $('[name="name"]').val(),
			email: $('[name="email"]').val(),
			phone: $('[name="phone"]').val(),
			subject: $('[name="subject"]').val(),
			message: $('[name="message"]').val()
		};

		// Gửi dữ liệu bằng AJAX
		const btn = document.querySelector('#contact-form')
		const getHtml = btn.innerHTML
		btn.innerHTML = `<span class="spinner-border" style="width: 3rem; height: 3rem;background-color:'black';" role="status" aria-hidden="true"></span>
	<span class="sr-only">Sending...</span>`
		fetch('https://service.whiteneurons.com/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then(response => response.json())
			.then(data => {
				alert('Chúng tôi đã nhận được thư của bạn');
				$('[name="name"]').val("")
				$('[name="email"]').val("")
				$('[name="phone"]').val("");
				$('[name="subject"]').val("");
				$('[name="message"]').val("");
			})
			.catch(e => {
				alert('!Có lỗi xảy ra thử lại sau');
			})
			.finally(e => {
				btn.innerHTML = getHtml
			})

	});
});
