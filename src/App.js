import { useContext } from 'react'
import Layout from './containers/layout'
import Score from './containers/score'
import Game from './containers/game'
import Result from './containers/result'
import Button from './components/button'
import Rules from './components/rules'

import { store } from './context/store'

const App = () => {
  const { showResult, showModal, showModalHandler } = useContext(store)

  return (
    <Layout>
      {showModal && <Rules showModalHandler={showModalHandler} />}
      <Score />
      {showResult ? <Result /> : <Game />}
      <Button text='rules' onClick={showModalHandler} />
    </Layout>
  )
}

export default App
