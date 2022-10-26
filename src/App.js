import './App.css';
import Workflow from './components/Workflow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{color: '#3ecc31'}}>Parallel Mode</h1>
      <Workflow />
    </div>
  );
}

export default App;
