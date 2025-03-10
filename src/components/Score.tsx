import useGame from '../hooks/useGame'

export default function Score() {
  const { score } = useGame()
  return (
    <div className="flex flex-col items-center rounded-lg bg-white px-11 py-4">
      <div className="text-barlow-semi text-score tracking-widest uppercase">Score</div>
      <div className="text-barlow-bold text-dark text-5xl">{score}</div>
    </div>
  )
}
