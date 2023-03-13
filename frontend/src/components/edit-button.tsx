import React from 'react'

type EditButtonProps = {
    onClick: () => void,
    setEditing: (editing: boolean) => void,
    editing: boolean,
}
const EditButton: React.FC<EditButtonProps> = ({ onClick, setEditing, editing}) => (
    <button onClick={ () => {
        onClick();
        setEditing(!editing);
    }}>
        Edit
    </button>
)

export default EditButton