import React, { useState } from 'react'
import Check from './check'
import DeleteButton from './delete-button'
import EditButton from './edit-button'

type TodoProps = {
    id: number,
    label: string,
    isDone: boolean,
    onCheck: () => void,
    onEdit: () => void,
    onDelete: () => void,
}
const Todo: React.FC<TodoProps> = ({ id, label, isDone, onCheck, onEdit, onDelete }) => {

    const [ editing, setEditing ] = useState(false);
    const [ value, setValue ] = useState(label);

    return (
        <li>
            <Check onChange={ onCheck } isDone={isDone} />
            { editing ? 
                <input 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setEditing(!editing);
                        }
                    }}/> 
                : <span>{ value }</span> 
            }
            <EditButton onClick={ onEdit } setEditing={setEditing} editing={editing} />
            <DeleteButton onClick={ onDelete } />
        </li>
    )
}

export default Todo