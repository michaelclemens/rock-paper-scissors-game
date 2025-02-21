import { GameContext, getSelections } from '../lib/contexts'
import Score from './Score'
import { useContext } from 'react'

export default function Heading({ score }: { score: number }) {
  const { gameType, isBonusGame } = useContext(GameContext)
  const selections = getSelections(gameType)

  return (
    <div className="ring-header-outline mb-10 flex w-full items-center rounded-sm py-4 pr-4 pl-7 ring-3 lg:w-5xl">
      <ul className={`${isBonusGame ? 'text-lg leading-4' : 'text-4xl leading-7'} text-barlow-semi flex-grow text-white uppercase`}>
        {selections.map(selection => (
          <li key={selection}>{selection}</li>
        ))}
      </ul>
      <Score score={score} />
    </div>
  )
}
