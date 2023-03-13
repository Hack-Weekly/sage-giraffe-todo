import React, { FormEvent } from 'react'
import '../styles/addTodo.css';
import add from '../assets/add.svg';

interface AddFormElements extends HTMLFormControlsCollection {
    label: HTMLInputElement,
}
type AddProps = {
    onSubmit: (label: string) => void,
}
const Add:React.FC<AddProps> = ({ onSubmit }) => {

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const target = event.currentTarget.elements as AddFormElements

        if (target.label.value) {
            onSubmit(target.label.value)
        }
    }

    return (
        <form className="add-todo" onSubmit={ handleSubmit }
            action=""
            method="post"
            aria-label="Add a new task">
            <input type="text" name="label" placeholder='Task name' />
            <button type="submit" className="add-button">
                <img src={add} alt="add todo"/>
            </button>
        </form>
    )
}

export default Add