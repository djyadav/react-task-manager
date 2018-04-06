const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
 
 /* serves main page */
 app.use(express.static('server/static/'))
 app.get("*", function(req, res) {
    res.sendfile('server/static/index.html')
 });


 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendfile( __dirname + req.params[0]); 
 });

 app.listen(port, function() {
   console.log("Listening on " + port);
 });