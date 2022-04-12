import './App.css';
import Header from './components/Header/Header';
import FiltrPanel from './components/FiltrPanel/FiltrPanel';
import ServicePanel from './components/ServicePanel/ServicePanel';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='contanerMain'>

        <FiltrPanel />


        <ServicePanel />
        <ServicePanel />
        <ServicePanel />

      </div>
    </div>
  );
}

export default App;
