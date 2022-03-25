import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyLeague from './components/MyLeague/MyLeague';
import Header from './components/Header/Header';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <MyLeague></MyLeague>
    </div>
  );
}

export default App;
