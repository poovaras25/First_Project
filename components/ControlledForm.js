import React, {Component} from 'react'

class ControlledForm extends Component{
    
    constructor(props){

        super(props)

        this.state={
            firstName : null,
            lastName : null,
            age : null,
            contactNo : null,
            email : null

           }
    }
    

updateFirstName(event){
    console.log(event);
    this.setState({firstName : event.target.value})    
    
    }

submitForm(event){
    event.preventDefault();
    console.log(this.state.firstName+" "+this.state.lastName);
}


render(){
    return(
        <>
        <h2>Controlled form</h2>
        <form>
            <div>
                <label>FirstName:</label>
                <input type='text' name='firstName' onChange={this.updateFirstname.bind(this)}/>

                </div>
                <div>
                    <label>LastName:</label>
                    <input type='text' name='lastName' onChange={(event) => {this.setState ({lastName : event.target.value }) } } />
        
            </div>

            <button onClick={this.submitForm.bind(this)}>Submit</button>
            </form>
        </>
    );
}
}

export default ControlledForm;