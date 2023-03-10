import React from 'react'

type EditButtonProps = {
    onClick: () => void,
}
const EditButton: React.FC<EditButtonProps> = ({ onClick }) => (
    <button onClick={ onClick }>Edit</button>
)

export default EditButton