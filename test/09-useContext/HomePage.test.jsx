import { render, screen } from '@testing-library/react';
import HomePage from '../../src/09-useContext/HomePage';
import {UserContext} from '../../src/09-useContext/context/UserContext';

describe('Pruebas en componente <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Ariadna'
    }
    
    test('Debe de mostrar el componente con el ususario', () => {
       
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        // expect(preTag.innerHTML).toContain(user.id);

        // screen.debug();

    });

})
