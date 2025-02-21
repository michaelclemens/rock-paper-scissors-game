import { PlayerEnums, PlayerTypes, SelectionTypes } from '../lib/types'
import SelectionButton from './SelectionButton'

export default function SelectionResult({ player, selection, winner }: { player: PlayerTypes; selection?: SelectionTypes; winner?: boolean }) {
  return (
    <div className="flex flex-col gap-y-8 md:flex-col-reverse md:gap-y-10">
      <SelectionButton selection={selection} winner={winner} />
      <div>{player === PlayerEnums.user ? 'You picked' : player === PlayerEnums.house ? 'The house picked' : ''}</div>
    </div>
  )
}
