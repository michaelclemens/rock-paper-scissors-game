import useGame from '../hooks/useGame'
import Score from './Score'

export default function Heading() {
  const { isBonusGame, availableSelections } = useGame()

  return (
    <header className="ring-header-outline mb-10 flex w-full items-center rounded-sm py-4 pr-4 pl-7 ring-3 lg:w-5xl">
      <h1 className="flex-grow">
        <ul className={`${isBonusGame ? 'text-lg leading-4' : 'text-4xl leading-7'} text-barlow-semi text-white uppercase`}>
          {availableSelections.map(selection => (
            <li key={selection}>{selection}</li>
          ))}
        </ul>
      </h1>
      <Score />
    </header>
  )
}
