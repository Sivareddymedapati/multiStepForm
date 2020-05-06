import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {

    state = {
     step:1,
     lastName:'',
     firstName:'',
     age:'',
     occupation:'',
     gender:'',
     location:''

    }
     
    nextStep = () => {
        const {step} = this.state
      this.setState({
          step:step + 1
      })
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step:step - 1
        })
      }
    
    changeHandler = (e) => {
        const {target} = e;
       this.setState({
        [target.name]:target.value
       }) 
    }


    render() {
        const {step} = this.state
        const {firstName,lastName,age,occupation,gender,location} = this.state
        const values = {firstName,lastName,age,occupation,gender,location}

        switch (step) {
            case 1: return(
                <FormUserDetails continue={this.nextStep} values={values} changeHandler={this.changeHandler}/>
            )

            case 2: return(
                <FormPersonalDetails prev = {this.prevStep} continue={this.nextStep} values={values} changeHandler={this.changeHandler} />
            )
                
            case 3: return(
                <Confirm prev = {this.prevStep} continue={this.nextStep} values={values}/>
            ) 
            
            case 4: return(
                <Success />
            )
    }
}
    
}
    

export default UserForm
