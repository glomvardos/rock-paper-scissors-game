import { createContext, useState } from 'react'

const store = createContext()

const StoreProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const showModalHandler = () => setShowModal(prevState => !prevState)
  const showResultHandler = () => setShowResult(prevResult => !prevResult)

  const ctx = {
    showModal,
    showResult,
    showResultHandler,
    showModalHandler,
  }
  return <store.Provider value={ctx}>{children}</store.Provider>
}

export { store, StoreProvider }
