 import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import useTodo from '../hooks/useTodo'



const TodoApp = () => {

    const { todos, countTodos, pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();


    return (
        <>
            <h1>TodoApp: { countTodos }, <small>pendientes: { pendingTodos }</small></h1>
            <hr />

            <div className="row">
                <div className='col-7'>

                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />    

                </div>


                <div className='col-5'>
                    <h4>Agregar ToDo</h4>
                    <hr />

                    <AddTodo onNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}

export default TodoApp
