import './App.css';
import Header from './components/Header/Header';
import MainPanel from './components/MainPanel/MainPanel';
import {BrowserRouter, Route} from 'react-router-dom';
import ServicePage from './components/ServicePanel/ServicePage/ServicePage'

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />   
      <Route exact path="/" component={   () => <MainPanel /> }/>   
      <Route exact path="/ylab" component={   () => <MainPanel /> }/>
      <Route exact path="/servicepage" component={   () => <ServicePage name={props.name} description={props.description} /> }/>      
    </div> 
      
    </BrowserRouter>
  );
}


export default App;
