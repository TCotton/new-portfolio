const newsblur = require('./../config/newsblur');
const http = require('http');
const querystring = require('querystring');
const q = require('q');
const fs = require('fs');
const _ = require('underscore');

/** Send authentication to newsblur API
 * **/
const req_authentication = function() {

  let data;
  let options;
  let req;
  const deferred = q.defer();

  data = querystring.stringify({
    username: newsblur.username,
    password: newsblur.password,
  });

  options = {
    hostname: 'www.newsblur.com',
    port: 80,
    path: '/api/login',
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data),
    }
  };

  req = http.request(options, function(res) {

    if (res.statusCode === 200 && res.headers['set-cookie']) {

      deferred.resolve(res.headers['set-cookie']);

    } else {

      deferred.reject(new Error('Permissions refused. Status code: ' + res.statusCode));

    }

  });

  req.on('error', function(e) {
    deferred.reject(new Error('problem with request: ' + e.message));
  });

  req.write(data);
  req.end();

  return deferred.promise;

};

/** Request the last starred items using the returned authenticated cookie is the header request
 * **/
const write_json_file = function(data) {

  let options;
  let req;
  let fileName = 'feeds_' + Date.now().toString();
  let deferred = q.defer();

  options = {
    hostname: 'www.newsblur.com',
    port: 80,
    path: '/reader/starred_stories',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13',
      'Cookie': data,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  req = http.request(options, function(res) {

    let wstream;

    res.setEncoding('utf8');

    wstream = fs.createWriteStream('./server/newsblur_feed/' + fileName + '.json');

    res.pipe(wstream);

    res.on('end', function() {
      deferred.resolve(fileName);
    });

    // This is here in case any errors occur
    wstream.on('error', function(err) {
      deferred.reject(new Error(err));
    });

  });

  req.on('error', function(e) {
    deferred.reject(new Error('problem with request: ' + e.message));
  });

  req.end();

  return deferred.promise;

};

module.exports = function(app) {

  app.route('/api/newsblur/get').get(function(req, res) {

    fs.readdir('./server/newsblur_feed', function(err, file) {

      if (err) {
        res.send(err);
      }

      if (_.isEmpty(file)) {

        // if the directory doesn't have a file then create one and send the contents to the frontend

        req_authentication().then(function(data) {
          write_json_file(data).then(function(fileName) {

            if (fileName) {

              fs.readFile('./server/newsblur_feed/' + fileName + '.json', function(err, data) {

                if (err) {
                  throw err;
                }
                res.send(data);

              });

            }

          }).done();
        });

      } else {

        const hours24 = 86400000;
        // take the number from the json file name - this is the date it was created
        let fileAge = parseInt(file.toString().substring(file.toString().indexOf('_') + 1, file.toString().indexOf('.')), 10);
        let dateNow = parseInt(Date.now(), 10);

        if ((dateNow - fileAge) > hours24) {

          // if older than a day then delete the file and write a new one
          fs.unlink('./server/newsblur_feed/' + file.toString(), function(err) {

            if (err) {
              res.send(err);
            }

            req_authentication().then(function(data) {
              write_json_file(data).then(function(fileName) {

                if (fileName) {

                  let contents = fs.readFileSync('./server/newsblur_feed/' + fileName + '.json', 'utf8');
                  res.send(contents);

                }

              }).done();
            });

          });

        } else {

          // if fresher than one day take the contents of the file and send it to the frontend

          fs.readFile('./server/newsblur_feed/' + file, function(err, data) {

            if (err) {
              throw err;
            }
            res.send(data);

          });

        } // end if if ((dateNow - fileAge) > hours24) {
      }
    });
  });
};
