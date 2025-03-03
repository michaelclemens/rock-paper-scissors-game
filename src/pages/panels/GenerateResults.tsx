import SelectionResult from '../../components/SelectionResult'
import useGame from '../../hooks/useGame'
import useSelection from '../../hooks/useSelection'
import { PlayerEnums } from '../../lib/types'
import { useEffect } from 'react'

const HOUSE_SELECTION_TIMEOUT = 1000
const SELECTION_RESULTS_TIMEOUT = 500

export default function GenerateResults() {
  const { gameType, updateScore } = useGame()
  const { selection, houseSelection, setHouseSelection, getRandomSelection, setResult, determineResult } = useSelection()

  useEffect(() => {
    setTimeout(() => {
      const randomSelection = getRandomSelection(gameType)
      setHouseSelection(randomSelection)

      setTimeout(() => {
        const result = determineResult(selection, randomSelection)
        setResult(result)
        updateScore(result)
      }, SELECTION_RESULTS_TIMEOUT)
    }, HOUSE_SELECTION_TIMEOUT)
  }, [determineResult, gameType, getRandomSelection, selection, setHouseSelection, setResult, updateScore])

  return (
    <div className="text-barlow-semi flex h-full w-full items-center justify-evenly text-center tracking-widest text-white uppercase">
      <SelectionResult player={PlayerEnums.user} selection={selection ?? undefined} />
      <SelectionResult player={PlayerEnums.house} selection={houseSelection ?? undefined} />
    </div>
  )
}
