import React from 'react'
import edit from '../assets/edit.svg';

type EditButtonProps = {
    onClick: () => void,
    setEditing: (editing: boolean) => void,
    editing: boolean,
}
const EditButton: React.FC<EditButtonProps> = ({ onClick, setEditing, editing}) => (
    <button className="edit-button" onClick={ () => {
        onClick();
        setEditing(!editing);
    }}>
        <img src={edit} alt="edit todo"/>
    </button>
)

export default EditButton