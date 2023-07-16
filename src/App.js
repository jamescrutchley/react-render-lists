import Overview from "./components/Overview";
import { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: {
        text: "",
        id: uniqid(),
        edit: true,
        number: 1,
      },
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        number: prevState.tasks.length + 1,
      },
    }));
  }

  addTask = (e) => {
    e.preventDefault();

    const { tasks, inputValue } = this.state;
    const updatedTasks = [...tasks, inputValue];

    if (!inputValue.text) {
      return;
    }

    this.setState({
      inputValue: {
        text: "",
        id: uniqid(),
        edit: false,
        number: updatedTasks.length + 1,
      },
      tasks: updatedTasks,
    });
  };

  removeTask = (itemId) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== itemId);

    const updatedTasksWithNumbers = updatedTasks.map((task, index) => ({
      ...task,
      number: index + 1,
    }));

    this.setState({
      inputValue: {
        text: "",
        id: uniqid(),
        edit: false,
        number: updatedTasks.length + 1,
      },
      tasks: updatedTasksWithNumbers,
    });
  };

  //spread op this
  handleInputChange = (event) => {
    const { inputValue } = this.state;

    this.setState({
      inputValue: {
        text: event.target.value,
        id: inputValue.id,
        edit: false,
        number: inputValue.number,
      },
    });
  };

  // inefficient (?) making copy, modifying, sorting, setting state.
  handleEditMode = (itemId) => {
    const { tasks } = this.state;

    let copy = tasks.filter((task) => task.id !== itemId);
    const modified = tasks
      .filter((task) => task.id === itemId)
      .map((task) => ({ ...task, edit: true }));

    let newArray = [...copy, ...modified].sort((a, b) => a.number - b.number);

    this.setState({
      tasks: newArray,
    });
  };

  handleSubmitEdit = (itemId, newValue) => {
    const { tasks } = this.state;

    let copy = tasks.filter((task) => task.id !== itemId);
    const modified = tasks
      .filter((task) => task.id === itemId)
      .map((task) => ({ ...task, text: newValue, edit: false }));

    let newArray = [...copy, ...modified].sort((a, b) => a.number - b.number);

    this.setState({
      tasks: newArray,
    });
  };

  render() {
    const { tasks, inputValue } = this.state;
    return (
      <div className="App">
        <h1>Tasks</h1>
        <form onSubmit={this.addTask}>
          <label htmlFor="taskInput">Enter Task: </label>
          <input
            id="taskInput"
            onChange={this.handleInputChange}
            type="text"
            value={inputValue.text}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <Overview
          editMethod={this.handleEditMode}
          deletionMethod={this.removeTask}
          tasks={tasks}
          submitEdit={this.handleSubmitEdit}
        />
      </div>
    );
  }
}

export default App;
