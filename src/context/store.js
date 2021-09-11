import { createContext, useState } from 'react'

const store = createContext()

const StoreProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  const showModalHandler = () => setShowModal(prevState => !prevState)

  const ctx = {
    showModal,
    showModalHandler,
  }
  return <store.Provider value={ctx}>{children}</store.Provider>
}

export { store, StoreProvider }
