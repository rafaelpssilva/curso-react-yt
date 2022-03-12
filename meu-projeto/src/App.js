import './App.css';

import Event from './components/Event'
import Form from './components/Form'

function App() {
    return (
      <div className="App">
        <h1>Working Events</h1>
        <Event id={9} />
        <Event id={2} />
        <Form />
      </div>
    );
}

export default App;
