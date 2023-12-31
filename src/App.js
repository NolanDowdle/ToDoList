import React, { Component } from 'react';
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class App extends Component {
  state = {
    todos: [
      
    ]
  }
  addTodo = (prop) => {
    prop.id = Math.random();
    let todosNew = [... this.state.todos, prop]
    this.setState({
      todos: todosNew
    })
  }
  deleteTodo = (id) => {
    console.log(id);
    const todosCopy = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todosCopy
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
