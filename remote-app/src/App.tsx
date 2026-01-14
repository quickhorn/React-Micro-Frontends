import './App.css'
import Header from './components/Header'
import Button from './components/Button'

function App() {

  return (
    <>
      <Header />
      <Button text="Click me" onClick={() => alert(
                "Well done you've imported the MF remote component successfully"
      )} />
    </>
  )
}

export default App
