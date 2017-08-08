
// Requires
var mysql = require('mysql')
// ----------------------------------------------------------

// Connection info
var connection = mysql.createConnection({
  host     : '<DB HOST>',
  user     : '<USERNAME>',
  password : '<PASSWORD>',
  database : '<DB NAME>'
})
// ----------------------------------------------------------

// Exports
module.exports = (function() {
	return connection
})()
// ----------------------------------------------------------