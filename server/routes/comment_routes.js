const fs = require('fs');
const dir = 'log';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const Comments = require('./models/comment_model');
const moment = require('moment');
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

module.exports = function(app) {

  app.route('/api/comment/add').post(function(req, res) {

    Comments.create({
      name: req.body.name,
      email: req.body.email,
      url: req.body.url,
      message: req.body.message,
      blogId: req.body.blogId,
      published: false,
      publishedDate: moment().valueOf()
    }, function(err, comment) {

      if (err) {
        res.send(err);
      }

      // send email on successful blog comment
      if (comment) {

        var message = 'Name: ' + req.body.name + '\n' +
          'Url: ' + req.body.url + '\n' +
          'Message: ' + req.body.message + '\n';

        client.sendEmail({
          'From': 'me@andywalpole.me',
          'To': 'me@andywalpole.me',
          'Subject': 'New comment on blog',
          'HtmlBody': message
        }, function(error) {
          if (error) {
            logger.log('info', 'Unable to send (comment notification) via postmark: ' + error.message);
            return;
          }

          res.json(comment);

        });

      }

    });

  });

  app.route('/api/comment/update').put(function(req, res) {

    Comments.findById(req.body.id, function(err, cm) {

      if (err) {
        res.send(err);
      }

      if (!cm) {

        return new Error('Could not load Comment document');

      } else {

        // update here
        cm.published = req.body.published;

        cm.save(function(err) {

          if (err) {
            res.send(err);
          } else {
            res.json('Success');
          }

        });

      }

    });

  });


  app.route('/api/comment/get').get(function(req, res) {

    // use mongoose to get all blogs in the database
    Comments.find(function(err, comments) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(comments);

    });

  });

  app.route('/api/comment/getPublished').get(function(req, res) {

    // use mongoose to get all blogs in the database that are published and with the right blog id
    Comments.find({published: true, blogId: req.query.blogId}, function(err, comments) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(comments);

    });

  });

  app.route('/api/comment/delete/:id').delete(function(req, res) {

    Comments.remove({

      _id: req.params.id

    }, function(err, blogs) {

      if (err) {
        res.send(err);
      }

      if (blogs) {
        res.json(blogs);
      }

    });

  });

};
