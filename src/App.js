import Overview from './components/Overview';
import { Component } from 'react';
import uniqid from "uniqid";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: {
                text: '',
                id: uniqid(),
            },
            tasks: [],
        }
    }

   addTask = (e) => {
    e.preventDefault();

    const { tasks, inputValue } = this.state;
    this.setState({
        tasks: [...tasks, inputValue],
        inputValue: {
            text: '',
            id: uniqid(),
        }
    })
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: {
        text: event.target.value,
        id: uniqid(),
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
