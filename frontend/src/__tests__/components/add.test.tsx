import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Add from '../../components/add'

const user = userEvent.setup()

describe('Add new todo component', () => {
    
    const onSubmit = vi.fn()
    const renderDefaultAdd = () => render(<Add onSubmit={ onSubmit } />)

    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('should be a form', () => {
        renderDefaultAdd()

        expect(screen.getByRole('form')).toBeInTheDocument()
    })

    it('should have an input field', () => {
        renderDefaultAdd()

        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should have a submit button', () => {
        renderDefaultAdd()

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should reject an empty input', async () => {
        renderDefaultAdd()

        await user.click(screen.getByRole('button'))

        expect(onSubmit).not.toHaveBeenCalled()
        expect(screen.getByText('Some validation text explaining the issue')).toBeInTheDocument()
    })

    it('should call the onSubmit function when the form is submitted', async () => {
        renderDefaultAdd()

        expect(onSubmit).not.toHaveBeenCalled()

        screen.getByRole('textbox').focus()
        await user.keyboard('Some text{Enter}')
        
        expect(onSubmit).toHaveBeenCalledOnce()
        expect(onSubmit).toHaveBeenCalledWith('Some text')
    })

    it('should call the onSubmit function when the button is clicked', async () => {
        renderDefaultAdd()

        expect(onSubmit).not.toHaveBeenCalled()

        screen.getByRole('textbox').focus()
        await user.keyboard('Some text')

        await user.click(screen.getByRole('button'))
        
        expect(onSubmit).toHaveBeenCalledOnce()
        expect(onSubmit).toHaveBeenCalledWith('Some text')
    })
})