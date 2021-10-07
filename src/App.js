import { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: [],
      todoItems: [
        {title: "learn react", isComplete: true},
        {title: "learn javaScript", isComplete: true},
        {title: "learn HTML CSS", isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyUp(event) {
    let text = event.target.value;
    if(event.keyCode === 13) {
      if(!text) {
        return;
      }
      text = text.trim();
      if(!text) {
        return;
      }

      this.setState({
        newItem:'',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    });
  }

  onItemClicked(item){
    console.log("check click")
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }
  render() {
    const { todoItems, newItem } = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          <div className="header">
            <span>Add</span>
            <input
              type="text"
              placeholder="Add a new item"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
              >
            </input>
          </div>
          {
            todoItems.length && todoItems.map((item, index) => 
              <TodoList 
                key={index} 
                item={item} 
                onClick={this.onItemClicked(item)}
              />
            )
          }
        </div>
      );
    }
  }
}


export default App;
