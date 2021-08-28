import Layout from './containers/layout'
import Score from './containers/score'
import Game from './containers/game'
import Button from './components/button'

const App = () => {
  return (
    <Layout>
      <Score />
      <Game />
      <Button text='rules' />
    </Layout>
  )
}

export default App
