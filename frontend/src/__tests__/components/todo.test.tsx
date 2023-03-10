import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Todo from '../../components/todo'

const user = userEvent.setup()

describe('Todo component', () => {

    const onCheck = vi.fn()
    const onEdit = vi.fn()
    const onDelete = vi.fn()

    const todo = {
        id: 1,
        label: 'A task',
        isDone: false,
        onCheck,
        onEdit,
        onDelete,
    }

    const renderDefaultTodo = () => render(<Todo { ...todo } />)

    beforeEach(() => {
        vi.restoreAllMocks()
    })
    
    it('should show the label', () => {
        renderDefaultTodo()

        expect(screen.getByRole('listitem')).toHaveTextContent(todo.label)
    })

    it('should show a checkbox', () => {
        renderDefaultTodo()

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('should call the onCheck function when the checkbox is clicked', async () => {
        renderDefaultTodo()

        await user.click(screen.getByRole('checkbox'))

        expect(onCheck).toHaveBeenCalledOnce()
    })

    it('should show an edit button', () => {
        renderDefaultTodo()

        expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
    })

    it('should transform the label into an input field when the edit button is first clicked', async () => {
        renderDefaultTodo()

        expect(onEdit).not.toHaveBeenCalled()

        await user.click(screen.getByRole('button', { name: 'Edit' }))

        expect(screen.getByRole('textbox')).toBeInTheDocument()

        expect(onEdit).not.toHaveBeenCalled()
    })

    it('should call the onEdit function when the button is clicked a second time', async () => {
        renderDefaultTodo()

        expect(onEdit).not.toHaveBeenCalled()

        const editbutton = screen.getByRole('button', { name: 'Edit' })
        await user.click(editbutton)

        screen.getByRole('textbox').focus()
        await user.keyboard('Some text')
        await user.click(editbutton)

        expect(onEdit).toHaveBeenCalledOnce()
        expect(onEdit).toHaveBeenCalledWith('Some text')
        expect(screen.getByRole('listitem').querySelector('span')).toHaveTextContent('Some text')
    })

    it('should reject an empty input', async () => {
        renderDefaultTodo()

        expect(onEdit).not.toHaveBeenCalled()

        const editbutton = screen.getByRole('button', { name: 'Edit' })
        await user.click(editbutton)
        await user.click(editbutton)

        expect(onEdit).not.toHaveBeenCalled()
    })

    it('should show a delete button', () => {
        renderDefaultTodo()

        expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    })

    it('should call the onDelete function when the button is clicked', async () => {
        renderDefaultTodo()

        expect(onDelete).not.toHaveBeenCalled()

        await user.click(screen.getByRole('button', { name: 'Delete' }))

        expect(onDelete).toHaveBeenCalledOnce()
    })

    it('should accept the isDone prop', () => {
        const { rerender } = renderDefaultTodo()

        const checkbox = screen.getByRole('checkbox')

        expect(checkbox).not.toBeChecked()

        rerender(<Todo { ...todo } isDone={ true } />)

        expect(checkbox).toBeChecked()
        expect(screen.getByRole('listitem')).toHaveClass('strikethrough')
    })
})