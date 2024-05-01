import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from '../../src/08-reducer/components/ListItem'

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Recolectar frutitas',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    
    test('debe de mostrar el todo pendiente de completar', () => {
        
        render(
            <ListItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );


        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through');

    });


    test('debe de mostrar el todo completad', () => {

        todo.done = true;
        
        render(
            <ListItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );


        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).toContain('text-decoration-line-through');

    });



    test('el span debe llamar el ToggleTodo cuando se hace click', () => {

        render(
            <ListItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });


    test('el boton debe de llamar onDeleteTodo', () => {

        render(
            <ListItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const deleteButton = screen.getByRole('button', {name: 'Borrar'});
        
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

})
