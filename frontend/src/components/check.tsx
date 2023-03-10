import React from "react"

type CheckProps = {
    onChange: () => void,
}
const Check: React.FC<CheckProps> = ({ onChange }) => (
    <input type="checkbox" onChange={ onChange } />
)

export default Check