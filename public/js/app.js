var moment = moment();
var socket = io();

var name = getQueryVariable('name');
var room = getQueryVariable('room');

console.log(name + ' ' + room);

socket.on('connect', function() {
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message) {
	console.log('New message: ');
	console.log(message.text);

	var $message = jQuery('.messages');

	var timestamp = moment.utc(message.timestamp);
	var timeToDisplay = timestamp.format('h:mm a');
	$message.append('<p><strong>'+ message.name + timeToDisplay + ' : </strong> ' +'</p>');
	$message.append('<p>' + message.text + '</p>');
});

//handles submitting of new messages from form

var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', { 
		name: name,
		text: $message.val(),
		timestamp : moment.valueOf()
	});

	$message.val('');
});