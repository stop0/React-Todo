import React, { isValidElement } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
// import "./components/Todo.css"


const task = [

  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  }



]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: task,
      date: "",
      anotherStateProperty: {},
    };
  }


  toggleTask = (clickedTaskId) => {
    const newTasks = this.state.task.map((item) => {
      if (item.id === clickedTaskId) {
        return{
          ...item, completed:!item.completed
        };
      }

        else{
          return item;
        }
      }
    )
    console.log(newTasks);

    this.setState({
      task: newTasks
    });
  }



  addTask = (newTask) =>{
    this.setState({
      task:[
        ...this.state.task,
        {

          task: newTask,
          id: Date.now(),
          completed: false


        },
      ],
    });
  };


  clearTask = () => {
    this.setState({
      task: this.state.task.filter((item) => !item.completed),

    });
  }



  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <div>
        <TodoList clearTask = {this.clearTask} task={this.state.task} toggleTask={this.toggleTask} />
        </div>
      </div>
    );
  }
}

export default App;
