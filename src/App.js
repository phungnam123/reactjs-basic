import './App.scss'
import CardList from './components/card/CardList'
import Card2 from './components/card/CardTwo'

function App() {
  return (
    <div>
      <CardList>
        <Card2 secondary={true}></Card2>
      </CardList>
    </div>
  )
}

export default App
