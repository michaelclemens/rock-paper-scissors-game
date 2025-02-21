import SelectionResult from '../../components/SelectionResult'
import { GameContext, getSelections } from '../../lib/contexts'
import { PlayerEnums, ResultEnums, ResultTypes, SelectionEnums, SelectionTypes } from '../../lib/types'
import { useContext, useEffect, useState } from 'react'

export default function GenerateResults({
  selected,
  onHouseSelect,
}: {
  selected: SelectionTypes
  onHouseSelect: (selection: SelectionTypes, result: ResultTypes) => void
}) {
  const { gameType } = useContext(GameContext)
  const [houseSelection, setHouseSelection] = useState<SelectionTypes | null>(null)
  const selections = getSelections(gameType)

  const randomType = () => selections[Math.floor(Math.random() * selections.length)]

  const isWin = (houseSelection: SelectionTypes) => {
    switch (selected) {
      case SelectionEnums.rock:
        switch (houseSelection) {
          case SelectionEnums.scissors:
          case SelectionEnums.lizard:
            return true
        }
        break
      case SelectionEnums.paper:
        switch (houseSelection) {
          case SelectionEnums.rock:
          case SelectionEnums.spock:
            return true
        }
        break
      case SelectionEnums.scissors:
        switch (houseSelection) {
          case SelectionEnums.paper:
          case SelectionEnums.lizard:
            return true
        }
        break
      case SelectionEnums.lizard:
        switch (houseSelection) {
          case SelectionEnums.paper:
          case SelectionEnums.spock:
            return true
        }
        break
      case SelectionEnums.spock:
        switch (houseSelection) {
          case SelectionEnums.scissors:
          case SelectionEnums.rock:
            return true
        }
        break
    }
  }

  const determineResults = (houseSelection: SelectionTypes) => {
    if (selected === houseSelection) return ResultEnums.draw
    if (isWin(houseSelection)) return ResultEnums.win

    return ResultEnums.lose
  }

  useEffect(() => {
    setTimeout(() => {
      const houseSelection = randomType()
      setHouseSelection(houseSelection)
      setTimeout(() => {
        const result = determineResults(houseSelection)
        onHouseSelect(houseSelection, result)
      }, 500)
    }, 1000)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <div className="text-barlow-semi flex h-full w-full items-center justify-evenly text-center tracking-widest text-white uppercase">
      <SelectionResult player={PlayerEnums.user} selection={selected} />
      <SelectionResult player={PlayerEnums.house} selection={houseSelection ?? undefined} />
    </div>
  )
}
