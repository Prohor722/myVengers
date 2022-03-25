import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyLeague from './components/MyLeague/MyLeague';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <MyLeague></MyLeague>
      <Footer></Footer>
    </div>
  );
}

export default App;
