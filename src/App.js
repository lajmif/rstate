import React from "react";
import './App.css';

class App extends React.Component {
 state = {
  todo: [
    {
       id: Math.random(),
       task: "learn state",
       isDone: false
    },
    {
      id: Math.random(),
      task: "wow",
      isDone: false
   },
   {
    id: Math.random(),
    task: "its amazing",
    isDone: false
 },
]
    };


 handleDelete = (id) => {
  this.setState({todo: this.state.todo.filter((el) => el.id !=id) });
 }



    render () {
      console.log(this.state.todo);

      return (
        <div style={{ textAlign: "center"}}>
        {this.state.todo.map((el)  => (
          <div style={{marginTop: "35px"}}>
          <h1>{el.id}</h1>
          <h3>{el.task}</h3>
          <button>isDone</button>
          <button onClick={() => this.handleDelete(el.id)}>delete</button>
          </div>
        ))}
        </div>
      );
 
  }
}

export default App;
