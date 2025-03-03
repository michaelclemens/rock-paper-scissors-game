import { getRandomSelection, isWinningSelection } from '../lib/selection'
import { ResultEnums, ResultTypes, SelectionTypes } from '../lib/types'
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from 'react'

type SelectionContextType = {
  selection: SelectionTypes | null
  setSelection: Dispatch<SetStateAction<SelectionTypes | null>>
  houseSelection: SelectionTypes | null
  setHouseSelection: Dispatch<SetStateAction<SelectionTypes | null>>
  result: ResultTypes | null
  setResult: Dispatch<SetStateAction<ResultTypes | null>>
}
const SelectionContext = createContext<SelectionContextType>({
  selection: null,
  setSelection: () => {},
  houseSelection: null,
  setHouseSelection: () => {},
  result: null,
  setResult: () => {},
})

export const SelectionContextProvider = ({ children }: { children: ReactNode }) => {
  const [selection, setSelection] = useState<SelectionTypes | null>(null)
  const [houseSelection, setHouseSelection] = useState<SelectionTypes | null>(null)
  const [result, setResult] = useState<ResultTypes | null>(null)

  return (
    <SelectionContext.Provider value={{ selection, setSelection, houseSelection, setHouseSelection, result, setResult }}>
      {children}
    </SelectionContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default function useSelection() {
  const { selection, setSelection, houseSelection, setHouseSelection, result, setResult } = useContext(SelectionContext)

  const determineResult = useCallback((selection: SelectionTypes, houseSelection: SelectionTypes) => {
    if (selection === houseSelection) return ResultEnums.draw
    if (isWinningSelection(selection, houseSelection)) return ResultEnums.win
    return ResultEnums.lose
  }, [])

  const onPlayAgain = () => {
    setSelection(null)
    setHouseSelection(null)
    setResult(null)
  }

  return { selection, setSelection, houseSelection, setHouseSelection, getRandomSelection, result, setResult, determineResult, onPlayAgain }
}
