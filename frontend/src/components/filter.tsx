import React from 'react'

type FilterProps = {
    onChange: (value: string) => void,
}
const Filter: React.FC<FilterProps> = ({ onChange }) => {

    const handleChange = (event: React.FormEvent) => {
        event.preventDefault()
        const target = event.target as HTMLSelectElement
        onChange(target.value)
    }

    return (
        <select className="filter" onChange={ handleChange }>
            <option value="all">All</option>
            <option value="to-do">Not done</option>
            <option value="done">Done</option>
        </select>
    )
}

export default Filter