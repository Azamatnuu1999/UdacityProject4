function handleSubmit(event) {
	// event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById("name").value;
	let isValidURL = Client.checkForName(formText)
	console.log("::: Form Submitted :::");

	// Checking is valid URL
	let err = document.getElementById('error')
	if(!isValidURL) {
		err.innerText = 'Please enter valid url.'
		err.style.color = 'red'
	} else {
		err.innerText = ''
	}

	// Getting data from input
	let data = {
		theText: formText,
	};
	fetch("http://localhost:8081/call", {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	})
	.then((res) => res.json())
	.then(function (res) {
			console.log('ress', res)
			UpdateUI(res)
		});
	}

	// Updating UI
	function UpdateUI(res) {
		let agreement = document.getElementById('agreement')
		let confidence = document.getElementById('confidence')
		let irony = document.getElementById('irony')
		let message = document.getElementById('message')
		let model = document.getElementById('model')
		let score_tag = document.getElementById('score_tag')
		agreement.innerText = 'Agreement: ' + res.agreement.toLowerCase()
		confidence.innerText = 'Confidence: ' + res.confidence
		irony.innerText = 'Irony: ' + res.irony.toLowerCase()
		message.innerText = 'Message: ' + res.message
		model.innerText = 'Model: ' + res.model
		score_tag.innerText = 'Score: ' + res.score_tag
		
	}
	export { handleSubmit };
