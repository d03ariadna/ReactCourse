import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <LoginPage/>', () => {
    
    const user = {
        id: 1,
        name: 'Kizay',
        nickname: 'Peso Pelón'
    }

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user:null }}>
                <LoginPage />
            </UserContext.Provider>
        );


        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();

    });


    test('Debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{ user:null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>

        );

        
        const setButton = screen.getByRole('button');

        fireEvent.click(setButton);

        expect(setUserMock).toHaveBeenCalledWith(user);

        

    });

})
