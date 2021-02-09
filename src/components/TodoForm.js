import React from "react";


class TodoForm extends React.Component{

    constructor() {
        super();
        this.state ={
            input:"",

        };
    }


    handleChanged = (e) =>{
        this.setState({
            input:e.target.value,
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTask(this.state.input);

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="task"
                onChange={this.handleChanged}
                value={this.state.input}
                />
                <button>Add</button>

            </form>


        )
    }

}

export default TodoForm