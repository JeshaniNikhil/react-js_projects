import './App.css'
import Appname from './components/Appname'
import Currenttime from './components/Currenttime'
import Subtitle from './components/Subtitle'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <>
    <center>
    <Appname></Appname>
    <Subtitle></Subtitle>
    <Currenttime></Currenttime>
    </center>
    </>
  )
}

export default App
