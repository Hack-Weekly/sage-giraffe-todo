import React, { FormEvent } from 'react'

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
        <form onSubmit={ handleSubmit }
            action=""
            method="post"
            aria-label="Add a new task">
            <input type="text" name="label" />
            <button type="submit">Add</button>
        </form>
    )
}

export default Add