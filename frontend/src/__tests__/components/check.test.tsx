import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Check from '../../components/check'

const user = userEvent.setup()

describe('Checkbox component', () => {
    
    const onChange = vi.fn()
    const renderDefaultCheck = () => render(<Check onChange={ onChange } />)

    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('should be a checkbox', () => {
        renderDefaultCheck()

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('should call onChange when clicked', async () => {
        renderDefaultCheck()

        expect(onChange).not.toHaveBeenCalled()

        await user.click(screen.getByRole('checkbox'))

        expect(onChange).toHaveBeenCalled()
    })

    it('should be usable by keyboard', async () => {
        renderDefaultCheck()

        expect(onChange).not.toHaveBeenCalled()

        screen.getByRole('checkbox').focus()
        await user.keyboard('{ }')

        expect(onChange).toHaveBeenCalled()
    })
})