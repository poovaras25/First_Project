import React from 'react';

class ClassComponents extends React.Component{


    //constructor creation
    constructor(props){

        //calling parent class constructor
        super(props);

        //declaring default state
        this.state = {
            course: "JavaScript",
            days: "40",
            importantTopics:{
                topic1 : "Component",
                topic2 : "State Management",
                topic3 : "Context Api"

            }
        }

        //binding event handler globally    
        this.changeCourse = this.changeCourse.bind(this);
    }

    //event handler
    changeCourse(){

        //updating state using setState() method
        this.setState({
            course:"React JS"
        })
    }

    render(){
        return(
            <>
                <h2>Class Component Example</h2>
                <h4>UserName : {this.props.userObject.loggedUserName} </h4>
                <h4>Age : {this.props.userObject.age} </h4>
                <h4>Address : {this.props.userObject.address.city} </h4>
                <h3>State Example</h3>
                <h4>Course : {this.state.course}</h4>
                <h4>importantTopics :{this.state.importantTopics.topic3}</h4>

                <button onClick={this.changeCourse}>Change Course</button>
                
                
                       
            </>
        )
    }

}

export default ClassComponents;