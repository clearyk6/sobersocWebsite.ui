import React, { Component } from "react";
import Todos from './js/components/Todos.jsx';
import './main.css';
import AddTodo from './js/components/AddTodo.jsx';
import HeaderBar from './js/components/container/HeaderBar.jsx';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <HeaderBar />
          <AddTodo addTodo={ this.addTodo } />
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
