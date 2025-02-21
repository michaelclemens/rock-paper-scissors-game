import { SelectionTypes } from '../lib/types'
import styles from './SelectionButton.module.css'

export default function SelectionButton({
  selection,
  winner,
  onSelect,
}: {
  selection?: SelectionTypes
  winner?: boolean
  onSelect?: (selection: SelectionTypes) => void
}) {
  return (
    <>
      {selection ? (
        <div
          className={`${styles['selection-button']} ${styles[selection]} ${winner ? styles.winner : ''} ${onSelect ? styles.select : ''}`}
          onClick={() => onSelect && onSelect(selection)}
        />
      ) : (
        <div className={`${styles.placeholder}`} />
      )}
    </>
  )
}
