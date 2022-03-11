import './App.css';

import SayMyName from './components/SayMyName'
import Frase from './components/Frase'
import List from './components/List'


function App() {
  const nome = "Rafael"
  return (
    <div className="App">
      <h1>Quem sou eu??</h1>
      <SayMyName nome={nome.toLowerCase()} idade={5 + 11} profissão="Programador" />
      <Frase />
      <List />
    </div>
  );
}

export default App;
