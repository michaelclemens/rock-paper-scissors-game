import useGame from '../hooks/useGame'
import Score from './Score'

export default function Heading() {
  const { isBonusGame, availableSelections } = useGame()

  return (
    <div className="ring-header-outline mb-10 flex w-full items-center rounded-sm py-4 pr-4 pl-7 ring-3 lg:w-5xl">
      <ul className={`${isBonusGame ? 'text-lg leading-4' : 'text-4xl leading-7'} text-barlow-semi flex-grow text-white uppercase`}>
        {availableSelections.map(selection => (
          <li key={selection}>{selection}</li>
        ))}
      </ul>
      <Score />
    </div>
  )
}
