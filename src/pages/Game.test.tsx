import Game from './Game'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'

describe('GamePage', () => {
  beforeEach(() => render(<Game />))

  it('Render header & scoreboard', () => {
    expect(screen.getByRole('banner').textContent).toContain('paperscissorsrock')
    expect(screen.getByText(/score/i)).toBeDefined()
  })
  it('Render selections buttons', () => {
    expect(screen.getByRole('button', { name: /rock button/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /paper button/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /scissors button/i })).toBeDefined()
  })
  it('Click selection button', async () => {
    userEvent.click(screen.getByRole('button', { name: /rock button/i }))

    await waitFor(() => {
      expect(screen.getByText(/you picked/i)).toBeDefined()
      expect(screen.getByRole('button', { name: /rock button/i })).toBeDefined()

      expect(screen.getByText(/the house picked/i)).toBeDefined()
      expect(screen.getByLabelText(/placeholder selection/)).toBeDefined()
    })
  })
})
