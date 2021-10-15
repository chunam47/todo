const { v4: uuidv4 } = require('uuid');
const items = [
  { 
    id: uuidv4(),
    title: "learn react", 
    isComplete: true
  },{
    id: uuidv4(),
    title: "learn javaScript",
    isComplete: true
  },{
    id: uuidv4(),
    title: "learn HTML CSS",
    isComplete: false
  },
  ]
export default items;