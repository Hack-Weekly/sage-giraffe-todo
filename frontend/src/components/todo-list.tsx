import React from 'react'
import Todo from './todo'

type TodoListProps = {
    todos: {
        id: number,
        label: string,
        isDone: boolean,
    }[],
}
const TodoList: React.FC<TodoListProps> = ({ todos }) => (
    <ul>
        { todos.map(todo => (
            <Todo key={ todo.id } { ...todo }
                onCheck={ () => { console.log(`${ todo.id } checked`) }}
                onEdit={ () => { console.log(`${ todo.id } edit button clicked`) }}
                onDelete={ () => { console.log(`${ todo.id } delete button clicked`) }}
            />
        ))}
    </ul>
)

export default TodoList