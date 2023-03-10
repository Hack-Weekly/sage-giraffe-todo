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
        <Check onChange={ onCheck } />
        <span>{ label }</span>
        <EditButton onClick={ onEdit } />
        <DeleteButton onClick={ onDelete } />
    </li>
)

export default Todo