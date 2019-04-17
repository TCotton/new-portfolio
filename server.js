const path = require('path');

try {
	global.__base = path.resolve(__dirname, '');
	require('./server/');
} catch (ex) {
	throw ex;
}
