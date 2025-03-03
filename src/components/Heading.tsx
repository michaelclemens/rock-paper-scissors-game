import useGame from '../hooks/useGame'
import Score from './Score'

export default function Heading() {
  const { isBonusGame, availableSelections } = useGame()

  return (
    <header className="ring-header-outline mb-10 flex w-full items-center rounded-sm py-4 pr-4 pl-7 ring-3 lg:w-5xl">
      <h1 className={`${isBonusGame ? 'text-lg leading-4' : 'text-4xl leading-7'} text-barlow-semi flex-grow text-white uppercase`}>
        {availableSelections.map(selection => (
          <span key={selection} className="block">
            {selection}
          </span>
        ))}
      </h1>
      <Score />
    </header>
  )
}
