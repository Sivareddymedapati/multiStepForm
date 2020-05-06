import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <div>
                <div className="grid-3"></div>
                    <div className="grid-6">
                        <div className="grid-2"></div>
                        <div className="grid-9 form">
                        <div className="grid-12 heading">Multi-step form</div> 
                    <div className="success">Thank You for submitting the form </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success
