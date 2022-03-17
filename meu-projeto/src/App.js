import './App.css';

import Event from './components/Event'
import Form from './components/Form'
import Condicional from './components/Condicional'

function App() {
    return (
      <div className="App">
        <h1>Working Events</h1>
        <Event />
        <Form />
        <Condicional />
      </div>
    );
}

export default App;
