import { GameEnums, GameTypes, SelectionEnums, SelectionTypes } from './types'
import { createContext, Dispatch, SetStateAction } from 'react'

export const GameContext = createContext<{ gameType: GameEnums; isBonusGame: boolean; setGameType: Dispatch<SetStateAction<GameEnums>> }>({
  gameType: GameEnums.original,
  isBonusGame: false,
  setGameType: () => {},
})

export const getSelections = (gameType: GameTypes) => {
  const selections = [SelectionEnums.paper, SelectionEnums.scissors, SelectionEnums.rock] as SelectionTypes[]
  if (gameType === GameEnums.bonus) {
    selections.push(SelectionEnums.spock, SelectionEnums.lizard)
  }
  return selections
}
