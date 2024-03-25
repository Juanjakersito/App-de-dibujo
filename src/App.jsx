import './App.css'
import Canvas from './components/Canvas/Canvas'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <h1>App de dibujo 🎨</h1>
      <Navbar/>
      <Canvas width={600} height={600}/>
    </div>
  )
}

export default App
