import { renderHook, act } from '@testing-library/react';
import useForm from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Ratilla',
        email: 'ratilla@monito.com'
    }
  
    test('Debe regresar los valores por defecto', () => {

        
        const { result } = renderHook(() => useForm(initialForm));
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })

    });


    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = {
            name: 'name',
            value: 'Pelon'
        };
        
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;


        act(() => {
            onInputChange({target: newValue});
        })

        expect(result.current.name).toBe(newValue.value);
        expect(result.current.formState.name).toBe(newValue.value);

    });


    test('Debe de realizar el reset del formulario', () => {

        const newValue = {
            name: 'name',
            value: 'Pelon'
        };
        
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;


        act(() => {
            onInputChange({ target: newValue });
            onResetForm();
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });
})
