import Heading from '../components/Heading'
import Rules from '../components/Rules'
import { GameContextProvider } from '../hooks/useGame'
import { SelectionContextProvider } from '../hooks/useSelection'
import GamePanel from './GamePanel'

export default function Game() {
  return (
    <GameContextProvider>
      <div className="mx-auto flex h-full w-full flex-col items-center p-10">
        <Heading />
        <SelectionContextProvider>
          <GamePanel />
        </SelectionContextProvider>
        <div className="flex w-full flex-col items-center justify-end md:items-end">
          <Rules />
        </div>
      </div>
    </GameContextProvider>
  )
}
