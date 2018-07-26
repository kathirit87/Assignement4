function bootstrapSocketServer(io) {
	io.on('connection', (socket) => {
		socket.on('register', user => {
			socket.emit('welcomeMessage', `Welcome ${user.username} !!`);

			if(user.channels){
				user.channels.map(channel => {
					socket.join(channel);
					socket.emit('addedToChannel', { channel });
				});
			}
		});
	});
}

module.exports = bootstrapSocketServer;
