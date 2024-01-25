// eslint-disable-next-line
import React, {Component, createRef} from 'react'

//Create Age, Addres, Email
class UncontrolledForm extends Component { 

constructor(props){
    super(props)

    this.refs = React.createRef();
    this.submitForm = this.submitForm.bind(this)
}

submitForm(){
    alert(this.refs.firstName.value+" "+this.refs.contactNo.value)
}

render(){
    return (
        <>
        <h2>Uncontrolled Form</h2>
        <form>
            <div>
                <label>FirstName :</label>
                <input type='text' name='firstName' ref='firstName' />
                </div>
                <div>
                    <label>LastName :</label>
                    <input type='text' name='lastName' ref='lastName' />
                    </div>
                    <div>
                        <label>ContactNo :</label>
                        <input type='text' name='contactNo' ref='contactNo' />
                    </div>
           
                    <button onClick={this.submitForm}>Submit</button>
        </form>    
        </>
     );
}

}

export default UncontrolledForm;