import useSelection from '../hooks/useSelection'
import { Selection, GenerateResults, Results } from './panels'

export default function GamePanel() {
  const { selection, houseSelection, result } = useSelection()

  const renderPanel = () => {
    if (!selection) return <Selection />
    if (!houseSelection || !result) return <GenerateResults />
    return <Results />
  }

  return <main className="flex w-full flex-grow flex-col items-center justify-center">{renderPanel()}</main>
}
