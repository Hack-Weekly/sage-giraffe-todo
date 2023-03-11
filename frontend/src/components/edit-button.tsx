import React from 'react'

type EditButtonProps = {
    onClick: () => void,
}
const EditButton: React.FC<EditButtonProps> = ({ onClick }) => (
    <button onClick={ onClick } className="edit-button"><img src='./icons/edit.svg' alt="edit todo"/></button>
)

export default EditButton