import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import TodoList from '../../components/todo-list'

const user = userEvent.setup()

describe('Todo list component', () => {
    
    const todos = [
        {
            id: 1,
            label: 'Task #1',
            isDone: false,
        },
        {
            id: 2,
            label: 'Task #2',
            isDone: true,
        },
        {
            id: 3,
            label: 'Task #3',
            isDone: false,
        }
    ]
    const renderDefaultTodoList = () => render(<TodoList todos={ todos } />)

    it('should be an unordered list', () => {
        renderDefaultTodoList()

        expect(screen.getByRole('list')).toBeInTheDocument()
    })

    it('should contain the todos', () => {
        renderDefaultTodoList()

        const listelements = screen.getAllByRole('listitem')
        expect(listelements).toHaveLength(3)
        expect(listelements[0]).toHaveTextContent(todos[0].label)
        expect(listelements[1]).toHaveTextContent(todos[1].label)
        expect(listelements[2]).toHaveTextContent(todos[2].label)
    })

    it('should handle clicks on checkboxes by updating the store', async () => {
        renderDefaultTodoList()

        const checkboxes = screen.getAllByRole('checkbox')
        await user.click(checkboxes[1])

        expect(checkboxes[1]).toBeChecked()
        expect(screen.getAllByRole('listitem')[1]).toHaveClass('strikethrough')
    })

    it('should handle clicks on edit buttons by updating the store', async () => {
        renderDefaultTodoList()

        const editbuttons = screen.getAllByRole('button', { name: 'Edit' })
        await user.click(editbuttons[2])

        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()

        input.focus()
        await user.keyboard('Some text')
        await user.click(editbuttons[2])

        expect(screen.getAllByRole('listitem')[2].querySelector('span')).toHaveTextContent('Some text')
    })

    it('should handle clicks on delete buttons by updating the store', async () => {
        renderDefaultTodoList()

        await user.click(screen.getAllByRole('button', { name: 'Delete' })[0])

        const listelements = screen.getAllByRole('listitem')
        expect(listelements).toHaveLength(2)

        expect(screen.queryByText(todos[0].label)).not.toBeInTheDocument()
    })
})