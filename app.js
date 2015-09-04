var express     = require('express'),
    bodyParser  = require('body-parser'),
    loggit      = require('loggit'),
    app         = express(),
    port        = (process.env.PORT || 5000),
    environment = process.argv[2] || 'dev', // reset this to dev b4 real push
    Router      = require('./routes');


///   CONFIG OUR PORT
app.set('port', port);

///   CONFIG OUR APP TO PROPERLY HANDLE JSON DATA
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );


///   CONFIG SERVER BASED ON ENVIRONMENT
if( environment === 'dev' ){
  loggit("Serving dev environment", "blue");
  // app.use('/api', Router);
  app.use(express.static(__dirname + '/src'));
}
if( environment === 'dist' ){
  loggit("Serving public environment", "yellow"); 
  // app.use('/api', Router);
  app.use(express.static(__dirname + '/dist'));
}

///   ALLOW OUR APP TO START BEING SERVED
app.listen(port, function() {
  loggit('Node app is running here: localhost:'+port, "green");
});
