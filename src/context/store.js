import { createContext, useCallback, useEffect, useState } from 'react'

const store = createContext()

const StoreProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [isChoice, setIsChoice] = useState(false)
  const [myPick, setMyPick] = useState(null)
  const [housePick, setHousePick] = useState(null)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState(0)

  const showModalHandler = () => setShowModal(prevState => !prevState)
  const showResultHandler = () => setIsChoice(prevChoice => !prevChoice)
  const incrementScoreHandler = () => setScore(prevScore => prevScore + 1)
  const decrementScoreHandler = () => setScore(prevScore => prevScore - 1)

  const gameStateHandler = useCallback(() => {
    setIsChoice(true)

    // DRAW
    if (myPick === housePick) {
      setResult('draw')
    }

    //WIN
    else if (
      (myPick === 'rock' && housePick === 'scissor') ||
      (myPick === 'paper' && housePick === 'rock') ||
      (myPick === 'scissor' && housePick === 'paper')
    ) {
      setResult('you win')
      incrementScoreHandler()
    }

    //LOSE
    else {
      setResult('you lose')
      decrementScoreHandler()
    }
  }, [myPick, housePick])

  useEffect(() => {
    if (housePick) {
      gameStateHandler()
    }
  }, [gameStateHandler, housePick])

  const ctx = {
    showModal,
    isChoice,
    myPick,
    housePick,
    score,
    result,
    setMyPick,
    setHousePick,
    showResultHandler,
    showModalHandler,
  }
  return <store.Provider value={ctx}>{children}</store.Provider>
}

export { store, StoreProvider }
