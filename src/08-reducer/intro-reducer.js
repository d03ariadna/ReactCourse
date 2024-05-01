

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];


const todoReducer = (state = initialState, action = {}) => {
    

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newToDo = {
    id: 2,
    todo: 'Recolectar otra piedra',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newToDo,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);