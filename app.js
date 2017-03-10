const express = require('express'),
      nunjucks = require('nunjucks'),
      morgan = require('morgan'),
      routes = require('./routes'),
      path = require('path'),
      bodyParser = require('body-parser');
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(3000, function() {
  console.log('server listening on port 3000');
});

app.use('/', routes);
