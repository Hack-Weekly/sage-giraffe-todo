import React from 'react'
import useTodosStore from '../app/todoStore'
import Todo from './todo'

type TodoListProps = {
    todos: {
        id: number,
        label: string,
        isDone: boolean,
    }[],
}
const TodoList: React.FC<TodoListProps> = ({ todos }) => {

    const { removeTodo, editTodo, toggleTodo } = useTodosStore()

    return (
        <ul>
            { todos.map(todo => (
                <Todo key={ todo.id } { ...todo }
                    onCheck={ () => { toggleTodo(todo.id) } }
                    onEdit={ () => { editTodo(todo); console.log(`${ todo.id } edit button clicked`) }}
                    onDelete={ () => removeTodo(todo.id) }
                />
            ))}
        </ul>
    )
}

export default TodoList