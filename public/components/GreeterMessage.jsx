var React = require('react');

var GreeterMessage = React.createClass({
    
    getDefaultProps: function(){
        return{
            name:'I am from Default Props GreeterMessage',
            message:'message is from Default Props GreeterMessage'
        }
        
    },
    
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello! {name}.</h1>
               <p>{message}</p>
            
            </div>
        
        )
    }
    
});

module.exports = GreeterMessage;