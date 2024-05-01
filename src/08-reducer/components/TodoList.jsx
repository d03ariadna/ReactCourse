import React from 'react'
import ListItem from './ListItem'
const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    return (
        <div className='list-group'>
            
            {
                todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
            
            
        </div>
    )
}

export default TodoList
