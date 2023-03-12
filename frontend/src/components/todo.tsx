import React from 'react'
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
const Todo: React.FC<TodoProps> = ({ id, label, isDone, onCheck, onEdit, onDelete }) => (
    <li>
        <div className='todo-field'>
            <Check onChange={ onCheck } isDone={isDone}/>
            <span className='todo-task'>{ label }</span>
            <EditButton onClick={ onEdit } />
            <DeleteButton onClick={ onDelete } />
        </div>
    </li>
)

export default Todo