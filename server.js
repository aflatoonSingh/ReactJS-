var express = require('express');

//create our app 

var app = express();

app.use(express.static('public')); //calling folder Public
//app.use(express.static(_dirname, '/node_modules/react/dist/react.js'));
//app.use('/script',express.static(_dirname + '/node_modules/react-dom/dist/react-dom.min.js'));
//app.use('/script',express.static(_dirname, '/node_modules/babel-core/browser.min.js'));
app.listen(3000, function() {

	console.log('Express server is up on port 3000')
})