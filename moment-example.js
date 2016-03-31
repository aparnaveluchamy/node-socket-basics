var moment = require('moment');

var now = moment();

console.log(now.format());
console.log(now.format("MM/do/YYYY"));
console.log(now.format('MMM do YYYY h:mm a'));
console.log(now.subtract(1,'year').format());

console.log(now.format('X'));
console.log(now.format('x'));

console.log(now.valueOf());

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format());