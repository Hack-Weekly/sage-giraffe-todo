import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Filter from '../../components/filter'

const user = userEvent.setup()

describe('Filter component', () => {
    
    const onChange = vi.fn()
    const renderDefaultFilter = () => render(<Filter onChange={ onChange } />)

    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('should be a combobox', () => {
        renderDefaultFilter()

        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('should have 3 options', () => {
        renderDefaultFilter()

        expect(screen.getAllByRole('option')).toHaveLength(3)
    })

    it('should call onChange when an option is selected', async () => {
        renderDefaultFilter()

        expect(onChange).not.toHaveBeenCalled()

        const select = screen.getByRole('combobox')
        const option: HTMLOptionElement = screen.getByRole('option', { name: 'Done' })
        await user.selectOptions(select, option)

        expect(option.selected).toBeTruthy()
        expect(onChange).toHaveBeenCalledOnce()
    })

    it('should work with keyboard', async () => {
        renderDefaultFilter()

        expect(onChange).not.toHaveBeenCalled()

        const select: HTMLSelectElement = screen.getByRole('combobox')

        select.focus()
        await user.keyboard('{ }[ArrowDown][ArrowDown]{Enter}')

        expect(select).toHaveValue('done')
        expect(onChange).toHaveBeenCalled()
    })
})