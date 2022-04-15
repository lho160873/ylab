import './App.css';
import Header from './components/Header/Header';
import MainPanel from './components/MainPanel/MainPanel';
import {Route} from 'react-router-dom';
import ServicePage from './components/ServicePanel/ServicePage/ServicePage'

const App = (props) => {
  
  return (
    <div>
      <Header />   
      <Route exact path="/" render={   () => <MainPanel state={props.state} addFiltr={props.addFiltr} setIdService={props.setIdService}/> }/>
      <Route exact path="/ylab" render={   () => <MainPanel state={props.state} addFiltr={props.addFiltr} setIdService={props.setIdService}/> }/>
      <Route path="/servicepage" render={   () => <ServicePage state={props.state} getIdService={props.getIdService}/> }/>      
    </div> 
  );
}


export default App;
