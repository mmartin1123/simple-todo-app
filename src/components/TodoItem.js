import React from 'react'

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#d35e0f',
      opacity: 0.4,
      textDecoration: 'line-through',
    }

    const { completed, title, id } = this.props.todo
    const { handleChangeProps, deleteTodoProps } = this.props

    return (
      <li className='todo-item'>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    )
  }
}

export default TodoItem
