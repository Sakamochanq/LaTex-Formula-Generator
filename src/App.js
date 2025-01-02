import Header from './components/Header';
import Generator from './components/Generator';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Generator />
        <Button />
      </div>
    </div>
  );
}
export default App;