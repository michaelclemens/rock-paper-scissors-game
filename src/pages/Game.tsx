import Heading from '../components/Heading'
import Rules from '../components/Rules'
import { GameContext } from '../lib/contexts'
import { GameEnums, ResultEnums, ResultTypes, SelectionTypes } from '../lib/types'
import { Selection, GenerateResults, Results } from './panels'
import { useState } from 'react'

export default function Game() {
  const [gameType, setGameType] = useState(GameEnums.original)
  const [selected, setSelected] = useState<SelectionTypes | null>(null)
  const [houseSelected, setHouseSelected] = useState<SelectionTypes | null>(null)
  const [result, setResult] = useState<ResultTypes | null>(null)
  const [score, setScore] = useState(0)

  const updateScore = (result: ResultTypes) => {
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
  }

  const onHouseSelect = (selection: SelectionTypes, result: ResultTypes) => {
    setHouseSelected(selection)
    setResult(result)
    updateScore(result)
  }

  const onPlayAgain = () => {
    setSelected(null)
    setHouseSelected(null)
    setResult(null)
  }

  const renderPanel = () => {
    if (!selected) return <Selection onSelect={selection => setSelected(selection)} />
    if (!houseSelected || !result) return <GenerateResults selected={selected} onHouseSelect={onHouseSelect} />

    return <Results selected={selected} houseSelected={houseSelected} result={result} onPlayAgain={onPlayAgain} />
  }

  return (
    <GameContext.Provider value={{ gameType, isBonusGame: gameType === GameEnums.bonus, setGameType }}>
      <div className="mx-auto flex h-full w-full flex-col items-center p-10">
        <Heading score={score} />
        <main className="flex w-full flex-grow flex-col items-center justify-center">{renderPanel()}</main>
        <div className="flex w-full flex-col items-center justify-end md:items-end">
          <Rules />
        </div>
      </div>
    </GameContext.Provider>
  )
}
