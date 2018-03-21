import React from 'react';

const ToDoItems = props => {
    
  let fullList = props
    .entries
    .map(entry => <li onClick={()=> props.deleteItem(entry.key)} key={entry.key}>{entry.task}</li>)

  return (
    <ul>
        {fullList}
    </ul>
  )
}

export default ToDoItems;