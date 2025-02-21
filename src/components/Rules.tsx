import { GameContext } from '../lib/contexts'
import closeIcon from '/images/icon-close.svg'
import bonusRulesImg from '/images/image-rules-bonus.svg'
import rulesImg from '/images/image-rules.svg'
import { useContext, useState } from 'react'

export default function Rules() {
  const { isBonusGame } = useContext(GameContext)
  const [opened, setOpened] = useState(false)
  return (
    <>
      <div>
        <button
          onClick={() => setOpened(true)}
          className="text-barlow-semi cursor-pointer rounded-md px-10 py-2 tracking-widest text-white uppercase ring-1 ring-white/75"
        >
          Rules
        </button>
      </div>
      <div
        className={`${opened ? 'block' : 'hidden'} absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-white p-10 md:top-1/2 md:left-1/2 md:h-96 md:w-96 md:-translate-x-1/2 md:-translate-y-1/2 md:p-5`}
      >
        <div className="my-10 flex w-full justify-center md:my-0 md:justify-start">
          <h1 className="text-barlow-bold text-dark text-3xl uppercase">Rules</h1>
          <button onClick={() => setOpened(false)} className="ml-auto hidden cursor-pointer md:block">
            <img src={closeIcon} />
          </button>
        </div>
        <div className="flex flex-grow">
          <img src={isBonusGame ? bonusRulesImg : rulesImg} className="my-auto w-full flex-none" />
        </div>
        <button onClick={() => setOpened(false)} className="my-10 cursor-pointer md:hidden">
          <img src={closeIcon} />
        </button>
      </div>
    </>
  )
}
