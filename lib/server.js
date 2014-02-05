var restify = require('restify'),
    search  = require('./search'),
    util    = require('./util');


module.exports = function () {
  var server = restify.createServer({
    name: 'directory',
    version: '0.1.0'
  });
  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  server.get('/search', function (req, res, next) {
    search.search(util.parseSearch(req), function (err, results) {
      res.send({
        toJSON: function () {
          return {
            total: results.length,
            limit: 10,
            data: results
          };
        }
      });
    });
    return next();
  });

  search.load(process.env.BADGE_STORE || (__dirname + '/../db/badges.json'), function (/*err*/) {
    console.log('Loaded badges');
    server.listen(process.env.PORT || 9000, function () {
      console.log('%s listening at %s', server.name, server.url);
    });
  });
};