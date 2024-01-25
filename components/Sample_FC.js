import React from 'react';

function Sample_FC(props) {
    return (
        <>
            <div>
                <h1>Functional Component Example</h1>
                <h4>UserName :{props.loggedUserName}</h4>
                <h4>Age : {props.age}</h4>
            </div>
        </>
    )
}

export default Sample_FC;
