import { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import tasks from './data/tasks';
const { v4: uuidv4 } = require('uuid');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
      itemValue: '',
      show: '123'
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleShowDone = this.handleShowDone.bind(this);
    this.handleShowNotDone = this.handleShowNotDone.bind(this);
  }
  
  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('task'));
    this.setState({
      items : items
    })
  }

  onKeyUp(event) {
    let text = event.target.value;
    const { items } = this.state;
    if(event.keyCode === 13) {
      if(!text) {
        return;
      }
      text = text.trim();
      if(!text) {
        return;
      }
      
      items.push({
        id: uuidv4(),
        title: text,
        isComplete: false
      })
      this.setState({
        itemValue: '',
        items: items
      })
      localStorage.setItem('task',JSON.stringify(items));
    }
  }

  onChange(event){
    this.setState({
      itemValue: event.target.value
    });
  }

  handleDone(item){
    return (event) => {
      const { items } = this.state;
      const isComplete = item.isComplete;
      const index = items.indexOf(item);
      this.setState({
        items: [
          ...items.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...items.slice(index + 1)
        ]
      })
      localStorage.setItem('task',JSON.stringify(items));
    }
  }

  handleDelete(id) {
    if(window.confirm("are you sure")) {
      const newItems = this.state.items.filter((item) => {
        return item.id !== id
      })
      this.setState({ items: newItems })    
      localStorage.setItem('task',JSON.stringify(newItems));
    }
  }

  handleShowDone(){
    const itemsOrigin = JSON.parse(localStorage.getItem('task'));
    const itemDone = [];
    // const show = this.state.show;
    
    itemsOrigin.forEach((item) => {
      if(item.isComplete === true) {
        itemDone.push(item);
        this.setState({
          items: itemDone
        })
      }
    })
  }
  handleShowNotDone(){
    const itemsOrigin = JSON.parse(localStorage.getItem('task'));
    const items = [];
    
    itemsOrigin.forEach((item) => {
      if(item.isComplete === false) {
        items.push(item);
        this.setState({
          items: items
        })
      }
    })

    console.log(items);
  }

  handleShowAll() {
    const items = JSON.parse(localStorage.getItem('task'));
    this.setState({
      items: items
    })

  }
  render() {
    const { items, itemValue } = this.state;
    if(items.length) {
      return (
        <div className="App">
          <div className="button-todo">
            <button className="btn" onClick={this.handleShowAll}>Show all</button>
            <button className="btn" onClick={this.handleShowDone}>Show done</button>
            <button className="btn" onClick={this.handleShowNotDone}>Show not done</button>
          </div>
          <div className="main-todo">
            <div className="header">
              <input
                type="text"
                placeholder="Add a new item"
                value={itemValue}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
                >
              </input>
            </div>
            {/* <TodoList items={items} onClickDone={this.handleDone()} /> */}
            {
              items.length && items.map((item, index) => 
                <TodoList 
                  key={index} 
                  item={item}
                  onClickDone={this.handleDone(item)}  
                  onClickDelete={this.handleDelete}  
                  />
              )
            }
          </div>
        </div>
      );
    }
  }
}


export default App;
