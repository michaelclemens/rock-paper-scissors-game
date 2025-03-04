import { getAvailableSelections, getRandomSelection, isWinningSelection } from './selection'
import { GameEnums, SelectionEnums, SelectionTypes } from './types'
import { describe, it, expect } from 'vitest'

const originalSelections = [SelectionEnums.paper, SelectionEnums.scissors, SelectionEnums.rock]
const bonusSelections = [...originalSelections, SelectionEnums.spock, SelectionEnums.lizard]

const getSelections = (exclude: SelectionTypes[]) => bonusSelections.filter(selection => !exclude.includes(selection))

describe('getAvailableSelections', () => {
  it('Returns correct selections when playing original game type', () => {
    expect(getAvailableSelections(GameEnums.original)).toEqual(originalSelections)
  })
  it('Returns correct selections when playing bonus game type', () => {
    expect(getAvailableSelections(GameEnums.bonus)).toEqual(bonusSelections)
  })
})

describe('getRandomSelection', () => {
  it('Returns a random selection', () => {
    expect(getRandomSelection(GameEnums.original)).toBeOneOf(originalSelections)
    expect(getRandomSelection(GameEnums.bonus)).toBeOneOf(bonusSelections)
  })
})

describe('isWinnigSelection', () => {
  it('Rock winning scenarios', () => {
    expect(isWinningSelection(SelectionEnums.rock, SelectionEnums.scissors)).toBeTruthy()
    expect(isWinningSelection(SelectionEnums.rock, SelectionEnums.lizard)).toBeTruthy()
  })
  it('Rock losing scenarios', () => {
    const losingSelections = getSelections([SelectionEnums.rock, SelectionEnums.scissors, SelectionEnums.lizard])
    for (const selection of losingSelections) {
      expect(isWinningSelection(SelectionEnums.rock, selection)).toBeFalsy()
    }
  })
  it('Paper winning scenarios', () => {
    expect(isWinningSelection(SelectionEnums.paper, SelectionEnums.rock)).toBeTruthy()
    expect(isWinningSelection(SelectionEnums.paper, SelectionEnums.spock)).toBeTruthy()
  })
  it('Paper losing scenarios', () => {
    const losingSelections = getSelections([SelectionEnums.paper, SelectionEnums.rock, SelectionEnums.spock])
    for (const selection of losingSelections) {
      expect(isWinningSelection(SelectionEnums.paper, selection)).toBeFalsy()
    }
  })
  it('Scissors winning scenarios', () => {
    expect(isWinningSelection(SelectionEnums.scissors, SelectionEnums.paper)).toBeTruthy()
    expect(isWinningSelection(SelectionEnums.scissors, SelectionEnums.lizard)).toBeTruthy()
  })
  it('Scissors losing scenarios', () => {
    const losingSelections = getSelections([SelectionEnums.scissors, SelectionEnums.paper, SelectionEnums.lizard])
    for (const selection of losingSelections) {
      expect(isWinningSelection(SelectionEnums.scissors, selection)).toBeFalsy()
    }
  })
  it('Lizard winning scenarios', () => {
    expect(isWinningSelection(SelectionEnums.lizard, SelectionEnums.paper)).toBeTruthy()
    expect(isWinningSelection(SelectionEnums.lizard, SelectionEnums.spock)).toBeTruthy()
  })
  it('Lizard losing scenarios', () => {
    const losingSelections = getSelections([SelectionEnums.lizard, SelectionEnums.paper, SelectionEnums.spock])
    for (const selection of losingSelections) {
      expect(isWinningSelection(SelectionEnums.lizard, selection)).toBeFalsy()
    }
  })
  it('Spock winning scenarios', () => {
    expect(isWinningSelection(SelectionEnums.spock, SelectionEnums.scissors)).toBeTruthy()
    expect(isWinningSelection(SelectionEnums.spock, SelectionEnums.rock)).toBeTruthy()
  })
  it('Spock losing scenarios', () => {
    const losingSelections = getSelections([SelectionEnums.spock, SelectionEnums.scissors, SelectionEnums.rock])
    for (const selection of losingSelections) {
      expect(isWinningSelection(SelectionEnums.spock, selection)).toBeFalsy()
    }
  })
})
