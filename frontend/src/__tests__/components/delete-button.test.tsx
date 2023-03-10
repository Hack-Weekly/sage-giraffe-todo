import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import DeleteButton from '../../components/delete-button'

const user = userEvent.setup()

describe('Delete button component', () => {
    
    const onClick = vi.fn()
    const renderDefaultButton = () => render(<DeleteButton onClick={ onClick } />)

    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('should be a button', () => {
        renderDefaultButton()

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should call onClick when clicked', async () => {
        renderDefaultButton()

        expect(onClick).not.toHaveBeenCalled()

        await user.click(screen.getByRole('button'))

        expect(onClick).toHaveBeenCalledOnce()
    })

    it('should be usable by keyboard', async () => {
        renderDefaultButton()

        expect(onClick).not.toHaveBeenCalled()

        screen.getByRole('button').focus()
        await user.keyboard('{Enter}')

        expect(onClick).toHaveBeenCalledOnce()

        await user.keyboard('{ }')

        expect(onClick).toHaveBeenCalledTimes(2)
    })
})