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

   addTask = (e) => {
    e.preventDefault();

    const { tasks, inputValue } = this.state;
    const updatedTasks = [...tasks, inputValue];
    const updatedTaskNumber = inputValue.number + 1;

    this.setState({
        inputValue: {
            text: '',
            id: uniqid(),
            number: updatedTaskNumber
        },
        tasks: updatedTasks
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
            <Overview tasks={tasks}/>
        </div>
      );
  }

}

export default App;
