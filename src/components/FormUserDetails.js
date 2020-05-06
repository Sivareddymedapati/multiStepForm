import React, { Component } from 'react'

export class FormUserDetails extends Component {
    render() {
        const { values, changeHandler } = this.props;
        return (
            <div>
            <div className="grid-3"></div>
              <div className="grid-6">
                <div className="grid-2"></div>
                <div className="grid-9 form">
                <div className="grid-12 heading">Multi-step form</div>   
                <form className="userForm">
                    <ul className="grid-4 inputLabel">
                    <li>Last Name</li>
                    <li>First Name</li> 
                    <li>Age</li>
                    </ul>
                    <div className="grid-6 inputText">
                    <input type="text" name="lastName" placeHolder = "Enter Last Name" value={values.lastName} onChange={changeHandler} /> <br/>
                    <input type="text" name="firstName" placeHolder = "Enter first Name" value={values.firstName} onChange={changeHandler} /> <br/>
                    <input type="text" name="age" placeHolder = "Enter age" value={values.age} onChange={changeHandler} /> 
                    </div>
                </form>    
                    <div className="grid-8"></div>
                    <button type="button" className="contBtn grid-3" onClick={this.props.continue}>Continue</button>
                    
                
                </div>
                <div className="grid-2"> </div>
            </div>
            <div className="grid-2"></div>
            </div>
        )
    }
}

export default FormUserDetails
