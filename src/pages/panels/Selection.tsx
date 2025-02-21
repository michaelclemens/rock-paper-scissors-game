import SelectionButton from '../../components/SelectionButton'
import { GameContext, getSelections } from '../../lib/contexts'
import { GameEnums, SelectionTypes } from '../../lib/types'
import styles from './Selection.module.css'
import { useContext } from 'react'

export default function Selection({ onSelect }: { onSelect: (selection: SelectionTypes) => void }) {
  const { gameType, isBonusGame, setGameType } = useContext(GameContext)
  const selections = getSelections(gameType)

  return (
    <>
      <div className={`${styles.wrapper} ${isBonusGame ? styles[GameEnums.bonus] : styles[GameEnums.original]}`}>
        {selections.map(selection => (
          <div key={selection} className="flex items-center justify-center">
            <SelectionButton selection={selection} onSelect={onSelect} />
          </div>
        ))}
      </div>
      <div className="bottom-0 left-0 p-10 md:fixed">
        <button
          className="text-barlow-semi cursor-pointer rounded-md px-10 py-2 tracking-widest text-white uppercase ring-1 ring-white/75"
          onClick={() => setGameType(isBonusGame ? GameEnums.original : GameEnums.bonus)}
        >
          {isBonusGame ? 'Original' : 'Bonus'}
        </button>
      </div>
    </>
  )
}
