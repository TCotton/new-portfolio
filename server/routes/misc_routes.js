const fs = require('fs');
const dir = 'log';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const postmarkapp = process.env.postmark;
const postmark = require('postmark');
const client = new postmark.Client(postmarkapp);
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = (app) => {

  app.route('/api/sendmail').post(function(req, res) {

    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    const message = req.body.message + '<br>' + 'IP Address: ' + ipAddress + '<br>' + 'Sender email address: ' + req.body.email;

    client.sendEmail({
      'From': 'me@andywalpole.me',
      'To': 'me@andywalpole.me',
      'Subject': 'Contact from portfolio',
      'HtmlBody': message
    }, function(error) {
      if (error) {

        logger.log('info', 'Unable to send (content form notification) via postmark: ' + error.message);

        res.json({
          'success': 'true',
          'message': 'There has been a problem sending this email. The administrators have been informed'
        });
        return;
      }

      res.json({
        'success': 'true',
        'message': 'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'
      });
    });

  });

};
