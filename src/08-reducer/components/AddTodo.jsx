import React, { useState } from 'react'
import useForm from '../../hooks/useForm';

const AddTodo = ({ onNewTodo }) => {

    const { onInputChange, onResetForm, description} = useForm({
        description: ''
    })
    

    const onSubmit = (e) => {

        e.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='What do you want to add?'
                className='form-control'
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}

export default AddTodo
