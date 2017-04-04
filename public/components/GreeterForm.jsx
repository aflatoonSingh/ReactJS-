var React = require('react');

var GreeterForm = React.createClass({
    
    onFormSubmit: function(e){
        
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        //console.log(message,'message');
        
        if(name.length>0){
            this.refs.name.value='';
            updates.name=name;
            //this.props.onNewName(name);
        }
        if(message.length>0){
           this.refs.message.value='';
            updates.message=message;
            //this.props.onNewName(message);
           }
        this.props.onNewName(updates);
        //console.log(jan,'jnag');
    },
    
    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' ref='name'/>
                    <textarea ref='message'></textarea>
                    <button>Submit</button>
        
        </form>
            </div>
        
        )
    }
    
    
});

module.exports = GreeterForm;