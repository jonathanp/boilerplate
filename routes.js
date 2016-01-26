module.exports = function routes(app) {
  app.get('/', function (req, res) {
    res.render('pages/index');
  });

  app.get('/:page', function(req, res, next) {
    var page = req.params.page;
    var pageContainsDot = !/^[^.]*$/.test(page);

    if (pageContainsDot) {
      // a static file is probably being requested
      return next();
    }

    res.render('pages/' + page);
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { error: err });
  });
};
