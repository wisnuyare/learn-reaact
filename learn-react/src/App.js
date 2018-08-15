import React, { Component } from 'react';
import NewApp from './appnew';

class App extends Component {
  state = {
    visitors : [
      {name : 'Fabio', age : 25, job : 'Front End', id: 1}
    ],
    jumlah : this.visitors.length-1
  }
  handleSubmit = (e) => {
    console.log(this.jumlah)
    this.setState ({
      visitors: [{name: this.nama.value, age: this.age.value, job: this.job.value, id: this.lastArray+1}]
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Forms </h1>
        <input type = "text" placeholder = "Insert Name" ref={el => this.nama=el}/><br/>
        <input type = "text" placeholder = "Insert Age" ref={el => this.age=el}/><br/>
        <input type = "text" placeholder = "Insert Job" ref={el => this.job=el}/><br/>
        <button onClick = { this.handleSubmit }>Submit</button>
        <NewApp visitors={this.state.visitors} />
      </div>
    );
  }
}

export default App;
