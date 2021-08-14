import './App.css';
import Footer from './components/footer';
import Landig from './components/landing';
import LetsTalk from './components/letsTalk';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landig/>
      <LetsTalk/>
      <Footer/>
    </div>
  );
}

export default App;
