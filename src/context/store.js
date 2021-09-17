import { createContext, useState } from 'react'

const store = createContext()

const StoreProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [myPick, setMyPick] = useState('')
  const [housePick, setHousePick] = useState('')

  const showModalHandler = () => setShowModal(prevState => !prevState)
  const showResultHandler = () => setShowResult(prevResult => !prevResult)

  const gameStateHandler = () => {
    const houseChoice = ['rock', 'paper', 'scissor']
    setShowResult(true)

    const randomNum = Math.floor(Math.random() * 2)
    console.log(randomNum)
    setTimeout(() => {
      setHousePick(houseChoice[randomNum])
    }, 2000)
  }

  const ctx = {
    showModal,
    showResult,
    myPick,
    housePick,
    setMyPick,
    showResultHandler,
    showModalHandler,
    gameStateHandler,
  }
  return <store.Provider value={ctx}>{children}</store.Provider>
}

export { store, StoreProvider }
