import Heading from './Heading'
import useGame from '@/hooks/useGame'
import { getAvailableSelections } from '@/lib/selection'
import { GameEnums } from '@/lib/types'
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

vi.mock('@/hooks/useGame')
const useGameMock = vi.mocked(useGame, { partial: true })

describe('HeadingComponent', () => {
  it('Render orginal game type heading', () => {
    useGameMock.mockReturnValue({ isBonusGame: false, availableSelections: getAvailableSelections(GameEnums.original) })
    const { getByRole } = render(<Heading />)
    expect(getByRole('heading').textContent).toEqual('paperscissorsrock')
  })

  it('Render bonus game type heading', async () => {
    useGameMock.mockReturnValue({ isBonusGame: true, availableSelections: getAvailableSelections(GameEnums.bonus) })
    const { getByRole } = render(<Heading />)
    expect(getByRole('heading').textContent).toEqual('paperscissorsrockspocklizard')
  })
})
