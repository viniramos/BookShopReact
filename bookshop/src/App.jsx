import './App.css'
import { Rotas } from './routes/Routes'
import { AutProvider } from "./context/AutContext";
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <AutProvider>
      < Navbar />
      <Rotas/>
      </AutProvider>
    </>
  )
}

export default App