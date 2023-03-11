import React from 'react'

type DeleteButtonProps = {
    onClick: () => void,
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
    <button onClick={ onClick } className="delete-button"><img src='./icons/delete.svg' alt="delete todo"/></button>
)

export default DeleteButton