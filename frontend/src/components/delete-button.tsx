import React from 'react';
import del from '../assets/delete.svg';

type DeleteButtonProps = {
    onClick: () => void,
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
    <button onClick={ onClick } className="delete-button">
        <img src={del} alt="delete todo"/>
    </button>
)

export default DeleteButton