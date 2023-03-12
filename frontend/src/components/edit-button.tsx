import React from 'react'
import edit from '../assets/edit.svg';

type EditButtonProps = {
    onClick: () => void,
}
const EditButton: React.FC<EditButtonProps> = ({ onClick }) => (
    <button onClick={ onClick } className="edit-button">
        <img src={edit} alt="edit todo"/>
    </button>
)

export default EditButton