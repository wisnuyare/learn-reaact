import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    handleChange = (e) => {        
        this.props.nameChange(e.target.value)
    }
    handleAgeChange = (e) => {
        this.props.ageChange(e.target.value)
    }
    handleJobChange = (e) => {
        this.props.jobChange(e.target.value)
    }
    handleSubmit = (e) => {        
        let visitor = this.props.visitors
        this.props.visitors.push({
            name: this.props.name,
            age: parseInt(this.props.age),
            job: this.props.job,
            id: visitor.length+1
        })
        this.props.submitForm(visitor)
        console.log(visitor.length)
    }
    render(){
        return(            
            <div className="Form">
                <input type = "text"  ref = "_masukin" placeholder = "Insert Name" onChange = { this.handleChange }/><br/>
                <input type = "text" placeholder = "Insert Age" onChange = { this.handleAgeChange }/><br/>
                <input type = "text" placeholder = "Insert Job" onChange = { this.handleJobChange }/><br/>
                <button onClick = { this.handleSubmit }>Submit</button>
            </div>
        )
    }
}

Form.propTypes = {
    masukin : PropTypes.string.isRequired
}

export default Form