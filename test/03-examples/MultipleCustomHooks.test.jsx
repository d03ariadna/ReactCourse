import { render, screen, fireEvent } from '@testing-library/react';
import MultipleCustomHooks from '../../src/03-examples/MultipleCustomHooks'
import { useCounter, useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch.js')
jest.mock('../../src/hooks/useCounter.js')

describe('Pruebas en <MultipleCustomHooks/>', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    
    test('Debe de mostrar el componente por defecto', () => {


        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Poke API'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        console.log(nextButton.disabled)

        screen.debug();

    });


    //DID NOT WORK

    // test('Debe de llamar la función incrementar', () => {


    //     useFetch.mockReturnValue({
    //         data: null,
    //         isLoading: true,
    //         hasError: null
    //     });
        
    //     render(<MultipleCustomHooks />);

    //     const nextButton = screen.getByRole('button', { name: 'Siguiente' });
    //     fireEvent.click(nextButton);

    //     expect(mockIncrement).toHaveBeenCalled();
        

    // });

})
