import Score from './Score'
import useGame from '@/hooks/useGame'
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@/hooks/useGame')
const useGameMock = vi.mocked(useGame, { partial: true })

describe('ScoreComponent', () => {
  it('Render score', () => {
    useGameMock.mockReturnValueOnce({ score: 5 })
    const { getByText } = render(<Score />)
    expect(getByText(/score/i)).toBeDefined()
    expect(getByText(5)).toBeDefined()
  })
})
