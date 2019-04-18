const spdy = require('spdy');
const express = require('express');
const http = require('http');
const errorHandler = require('express-error-handler');
http.globalAgent.maxSockets = Infinity;
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const compress = require('compression');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs');

if (fs.existsSync('./node-variables.env')) {
	const dotenv = require('dotenv');
	const result = dotenv.config({ path: './node-variables.env' })
	if (result.error) {
		throw result.error;
	}
}

const postmarkapp = process.env.postmark;
app.use(require('prerender-node').set('prerenderToken', postmarkapp));

app.use(helmet.frameguard('deny'));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());

if (app.get('env') === 'production') {
	app.use(helmet.hsts({ maxAge: 31536000 }));
}

const database = process.env.database;

mongoose.connect(database);

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); // log every request to the console
app.use(compress());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());
app.use(errorHandler());

global.__base = __dirname + '/';

app.all('*', function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
	next();
});

// routes ======================================================================
require('./routes/user_routes')(app);
require('./routes/blog_routes')(app);
require('./routes/comment_routes')(app);
require('./routes/misc_routes')(app);
require('./routes/newsblurAPI')(app);

//RSS feed parsing
require('./parse_feed/parse_rss')(app);

// XML sitemap =================================================================
require('./sitemap')(app);

module.exports = app;

if (app.get('env') === 'production') {

	spdy.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port')); // eslint-disable-line
	});

} else {

	http.createServer(app).listen(app.get('port'), function () {
		console.log('Express server listening on port ' + app.get('port')); // eslint-disable-line
	});

}
