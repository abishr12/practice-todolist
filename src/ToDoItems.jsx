import React from 'react';

const ToDoItems = ({entries, deleteItem}) => {
    
  let fullList = entries
    .map(entry => <li onClick={()=> deleteItem(entry.key)} key={entry.key}>{entry.task}</li>)

  return (
    <ul>
        {fullList}
    </ul>
  )
}

export default ToDoItems;