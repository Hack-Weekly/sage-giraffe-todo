import React from 'react'

type DeleteButtonProps = {
    onClick: () => void,
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
    <button onClick={ onClick }>Delete</button>
)

export default DeleteButton