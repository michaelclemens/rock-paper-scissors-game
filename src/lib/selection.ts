import { GameEnums, GameTypes, SelectionEnums, SelectionTypes } from './types'

export const getAvailableSelections = (gameType: GameTypes) => {
  const selections = [SelectionEnums.paper, SelectionEnums.scissors, SelectionEnums.rock] as SelectionTypes[]
  if (gameType === GameEnums.bonus) {
    selections.push(SelectionEnums.spock, SelectionEnums.lizard)
  }
  return selections
}

export const getRandomSelection = (gameType: GameTypes) => {
  const selections = getAvailableSelections(gameType)
  return selections[Math.floor(Math.random() * selections.length)]
}

export const isWinningSelection = (selection: SelectionTypes, houseSelection: SelectionTypes) => {
  if (selection === SelectionEnums.rock && (houseSelection === SelectionEnums.scissors || houseSelection === SelectionEnums.lizard)) return true
  if (selection === SelectionEnums.paper && (houseSelection === SelectionEnums.rock || houseSelection === SelectionEnums.spock)) return true
  if (selection === SelectionEnums.scissors && (houseSelection === SelectionEnums.paper || houseSelection === SelectionEnums.lizard)) return true
  if (selection === SelectionEnums.lizard && (houseSelection === SelectionEnums.paper || houseSelection === SelectionEnums.spock)) return true
  if (selection === SelectionEnums.spock && (houseSelection === SelectionEnums.scissors || houseSelection === SelectionEnums.rock)) return true
  return false
}
