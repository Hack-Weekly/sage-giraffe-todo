import React from "react"

type CheckProps = {
    onChange: () => void,
    isDone: boolean
}
const Check: React.FC<CheckProps> = ({ onChange, isDone }) => (
    <input type="checkbox" onChange={ onChange } checked={isDone}/>
)

export default Check