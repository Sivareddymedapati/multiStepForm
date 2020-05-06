import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
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
                        <li>Occupation</li>
                        <li>Gender</li> 
                        <li>Location</li>
                    </ul>
                   <div className="grid-6 inputText">   
                     <input type="text" name="occupation" placeHolder = "Enter occupation" value={values.occupation} onChange={changeHandler} /> <br/>
                     <input type="text" name="gender" placeHolder = "Enter gender" value={values.gender} onChange={changeHandler} /> <br/>
                     <input type="text" name="location" placeHolder = "Enter location" value={values.location} onChange={changeHandler} /> <br />
                   </div>
                             
                </form>
                <button className="contBtn grid-3" type="button" onClick={this.props.prev}>Back</button>
                <div className="grid-4"></div>
                <button className="contBtn grid-3" type="button" onClick={this.props.continue}>Continue</button>
                
                </div>
                <div className="grid-2"> </div>
            </div>
            <div className="grid-2"></div>
            </div>
            
           
        )
    }
}

export default FormPersonalDetails
