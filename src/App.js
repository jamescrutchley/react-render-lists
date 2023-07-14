import Overview from './components/Overview';
import { Component } from 'react';
import uniqid from "uniqid";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: {
                text: '',
                id: uniqid(),
                number: 1,
            },
        }
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
            text: '',
            id: uniqid(),
            number: updatedTasks.length + 1
        },
        tasks: updatedTasks
    })
  }

  removeTask = (itemId) => {

    const { tasks} = this.state;
    console.log(itemId)
    const updatedTasks = tasks.filter(task => (task.id !== itemId));

    const updatedTasksWithNumbers = updatedTasks.map((task, index) => ({
        ...task,
        number: index + 1,
      }));


    this.setState({
        inputValue: {
            text: '',
            id: uniqid(),
            number: updatedTasks.length + 1
        },
        tasks: updatedTasksWithNumbers
    })


  }

  handleInputChange = (event) => {
    const { inputValue } = this.state;

    this.setState({ inputValue: {
        text: event.target.value,
        id: inputValue.id,
        number: inputValue.number,
    }})
}

  render() {
    const { tasks, inputValue} = this.state;
    return (
        <div className="App">
            <form onSubmit={this.addTask}>
                <label htmlFor="taskInput">Enter Task: </label>
                <input id="taskInput" onChange={this.handleInputChange} type="text" value={inputValue.text}></input>
                <button type="submit">Submit</button>
            </form>
            <Overview deletionMethod={this.removeTask} tasks={tasks}/>
        </div>
      );
  }

}

export default App;
