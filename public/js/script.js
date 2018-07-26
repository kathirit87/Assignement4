function sendMessage(event, socket) {
	event.preventDefault();

	let message = document.getElementById('message').value;
	let channel = document.getElementById('channel').value;
	console.log(message);
	console.log(channel);
	let msgElement = document.createElement('div');
	msgElement.innerHTML = 
	`<div class="col-12">
		<div class="card sent-message">
			<div class="card-body">
				<p class="card-text">Me : ${message}</p>
			</div>
		</div>
	</div>
	`;

	document.getElementById('chatContainer').appendChild(msgElement);
}

function joinChannel() {
}

function leaveChannel() {
}

function onWelcomeMessageReceived(data) {
	console.log(data);
	let msgElement = document.createElement('div');
	msgElement.innerHTML = 
	`<div class="card received-message col-12">
		<div class="card-body">
			<p class="card-text">System : ${data}</p>
		</div>
	</div>
	`;
	document.getElementById('chatContainer').appendChild(msgElement);
}

function onNewMessageReceived() {
}

function onAddedToNewChannelReceived(data) {
	let channelInfo = document.createElement('div');
	channelInfo.innerHTML = 
	`<div class="alert alert-success alert-dismissible fade show" role="alert">
		You are added to <strong>${data.channel}</strong> successfully!
		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
	`;
	document.getElementById('alertContainer').appendChild(channelInfo);

	let channelList = document.createElement('option');
	channelList.innerHTML = data.channel;
	document.getElementById('channelsList').appendChild(channelList);
}

function onRemovedFromChannelReceived() {
}

module.exports = {
	sendMessage,
	joinChannel,
	leaveChannel,
	onWelcomeMessageReceived,
	onNewMessageReceived,
	onAddedToNewChannelReceived,
	onRemovedFromChannelReceived
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution

