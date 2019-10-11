		//Append HTML for warning


chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------




		for (const clickButton of document.getElementsByClassName('sr-cta-button-row')) {

			let messageContainer = document.createElement('div')
			let messageTitleContainer = document.createElement('h1')
			let messageSubtitleContainer = document.createElement('h2')
			let messageTitle = document.createTextNode('This website uses tactics to induce FOMO and make your impulse senses tingle')
			let messageSubtitle = document.createTextNode('You can still click it but at least you know now 😎')
			messageContainer.classList.add('impulse-warning-message')
			messageTitleContainer.appendChild(messageTitle)
			messageSubtitleContainer.appendChild(messageSubtitle)
			messageContainer.appendChild(messageTitleContainer)
			messageContainer.appendChild(messageSubtitleContainer)
			messageContainer.style.bottom = clickButton.height * 1.1;

			clickButton.appendChild(messageContainer)

		}
	}
	}, 10);
});