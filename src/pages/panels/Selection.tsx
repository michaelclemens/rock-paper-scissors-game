import SelectionButton from '../../components/SelectionButton'
import useGame from '../../hooks/useGame'
import useSelection from '../../hooks/useSelection'
import { GameEnums } from '../../lib/types'
import styles from './Selection.module.css'

export default function Selection() {
  const { isBonusGame, availableSelections, changeGameType } = useGame()
  const { setSelection } = useSelection()

  return (
    <>
      <div className={`${styles.wrapper} ${isBonusGame ? styles[GameEnums.bonus] : styles[GameEnums.original]}`}>
        {availableSelections.map(selection => (
          <div key={selection} className="flex items-center justify-center">
            <SelectionButton selection={selection} onSelect={() => setSelection(selection)} />
          </div>
        ))}
      </div>
      <div className="bottom-0 left-0 p-10 md:fixed">
        <button
          className="text-barlow-semi cursor-pointer rounded-md px-10 py-2 tracking-widest text-white uppercase ring-1 ring-white/75"
          onClick={() => changeGameType(isBonusGame ? GameEnums.original : GameEnums.bonus)}
        >
          {isBonusGame ? 'Original' : 'Bonus'}
        </button>
      </div>
    </>
  )
}
