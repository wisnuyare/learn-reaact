import React, { Component } from 'react';
import NewApp from './appnew';
import Form from './form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitors : [
        {name : 'Fabio', age : 25, job : 'Front End', id : 1},
        {name : 'Fabioa', age : 25, job : 'Front End', id : 2}
      ],
      checkList : false
    }
    this.nameChange = this.nameChange.bind(this)
    this.ageChange = this.ageChange.bind(this)
    this.jobChange = this.jobChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.onCheck = this.onCheck.bind(this)
  }
  nameChange(name) {
    this.setState({
      name: name
    });
  }
  ageChange(age) {
    this.setState({
      age: age
    });
  }
  jobChange(job) {
    this.setState({
      job: job
    });
  }
  submitForm(visitor){
    this.setState({
      id: visitor+1
    });
    console.log(this.state.visitors)
  }
  onCheck(checkList){
    this.setState({checkList: checkList})
  }
  
  render() {
    return (
      <div className="App">
        <h1> Forms </h1>
        <Form name = {this.state.name}
              age = {this.state.age}
              job = {this.state.job}
              visitors = {this.state.visitors}
              nameChange = {this.nameChange}
              ageChange = {this.ageChange}
              jobChange = {this.jobChange}  
              submitForm = {this.submitForm}
              />
        <NewApp 
              visitors={this.state.visitors}
              onCheck = {this.onCheck}
              checkList = {this.state.checkList}
               />
      </div>
    );
  }
}

export default App;
