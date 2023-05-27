import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {


  return (
    <div className="card--container">
      <div className="card">
        <Info />
        <div className="card--content">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
