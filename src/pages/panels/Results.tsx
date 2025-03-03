import SelectionResult from '../../components/SelectionResult'
import useSelection from '../../hooks/useSelection'
import { PlayerEnums, ResultEnums } from '../../lib/types'

export default function Results() {
  const { selection, houseSelection, result, onPlayAgain } = useSelection()

  return (
    <div className="flex w-full flex-col">
      <div className="text-barlow-semi flex w-full flex-grow justify-evenly text-center tracking-widest text-white uppercase">
        <SelectionResult player={PlayerEnums.user} selection={selection ?? undefined} winner={result === ResultEnums.win} />
        <SelectionResult player={PlayerEnums.house} selection={houseSelection ?? undefined} winner={result === ResultEnums.lose} />
      </div>
      <div className="mt-12 flex flex-col items-center">
        <div className="text-barlow-bold mb-5 text-5xl text-white uppercase">
          {result === ResultEnums.win ? 'You Win' : result === ResultEnums.draw ? 'Draw' : 'You Lose'}
        </div>
        <button className="text-barlow-semi text-dark cursor-pointer rounded-md bg-white px-20 py-3 tracking-widest uppercase" onClick={onPlayAgain}>
          Play again
        </button>
      </div>
    </div>
  )
}
