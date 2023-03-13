import React from "react"

type CheckProps = {
    onChange: () => void,
    isDone: boolean,
}
const Check: React.FC<CheckProps> = ({ onChange, isDone }) => (
    <div className="round-checkbox">
        <input 
            type="checkbox" 
            onChange={ onChange }
            className="input-checkbox"
            checked={isDone}
        />
    </div>
)

export default Check