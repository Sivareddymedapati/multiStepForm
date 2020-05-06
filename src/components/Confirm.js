import React, { Component } from 'react'

export class Confirm extends Component {
    render() {
        const { values} = this.props;
        return (
            <div>
              <div className="grid-3"></div>
              <div className="grid-6">
                <div className="grid-2"></div>
                <div className="grid-9 form">
                <div className="grid-12 heading">Multi-step form</div>   
                <form className="userForm1">
                    <ul className="grid-4 inputLabel">
                        <li>Last Name:</li>
                        <li>First Name:</li> 
                        <li>Age:</li>
                        <li>Occupation:</li>
                        <li>Gender:</li> 
                        <li>Location:</li>
                    </ul>
                    <ul className="grid-6 inputText"> 
                        <li>{values.lastName}</li>
                        <li>{values.firstName}</li> 
                        <li>{values.age}</li>
                        <li>{values.occupation}</li>
                        <li>{values.gender}</li> 
                        <li>{values.location}</li>
                    </ul>
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

export default Confirm
