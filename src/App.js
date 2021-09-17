import { useContext } from 'react'
import Layout from './containers/layout'
import Score from './containers/score'
import Game from './containers/game'
import Result from './containers/result'
import Button from './components/button'
import Rules from './components/rules'
import PlayAgain from './components/play-again'

import { store } from './context/store'

const App = () => {
  const { isChoice, result, showModal, showModalHandler } = useContext(store)

  return (
    <Layout>
      {showModal && <Rules showModalHandler={showModalHandler} />}
      <Score />
      {isChoice ? <Result /> : <Game />}
      {result && <PlayAgain />}
      <Button text='rules' onClick={showModalHandler} />
    </Layout>
  )
}

export default App
