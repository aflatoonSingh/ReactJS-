var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')


var firstName = 'Jangjujhar Singh from Prop';
var textMessage = 'Message is from Prop'
ReactDOM.render(
   <Greeter name={firstName} message={textMessage}/>,
    document.getElementById('app')
);