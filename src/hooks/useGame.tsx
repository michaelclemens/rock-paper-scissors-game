import { getAvailableSelections } from '../lib/selection'
import { GameEnums, GameTypes, ResultEnums, ResultTypes } from '../lib/types'
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from 'react'

type GameContextType = {
  gameType: GameTypes
  setGameType: Dispatch<SetStateAction<GameTypes>>
  score: number
  setScore: Dispatch<SetStateAction<number>>
}
const GameContext = createContext<GameContextType>({ gameType: GameEnums.original, setGameType: () => {}, score: 0, setScore: () => {} })

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [gameType, setGameType] = useState<GameTypes>(GameEnums.original)
  const [score, setScore] = useState(0)

  return <GameContext.Provider value={{ gameType, setGameType, score, setScore }}>{children}</GameContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export default function useGame() {
  const { gameType, setGameType, score, setScore } = useContext(GameContext)

  const updateScore = useCallback(
    (result: ResultTypes) => {
      let newScore = score
      if (result === ResultEnums.win) {
        newScore = score + 1
      }
      if (result === ResultEnums.lose) {
        newScore = score - 1 < 0 ? 0 : score - 1
      }
      if (newScore !== score) {
        setScore(newScore)
      }
    },
    [score, setScore]
  )

  const changeGameType = (gameType: GameTypes) => {
    setGameType(gameType)
    setScore(0)
  }

  return {
    gameType,
    changeGameType,
    isBonusGame: gameType === GameEnums.bonus,
    score,
    updateScore,
    availableSelections: getAvailableSelections(gameType),
  }
}
