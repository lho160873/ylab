import './App.css';
import Header from './components/Header/Header';
import MainPanel from './components/MainPanel/MainPanel';
import { Route } from 'react-router-dom';
import ServicePage from './components/ServicePanel/ServicePage/ServicePage'
//LKhorosheva
const App = (props) => {

  return (
    <div>
      <Header />
      <Route exact path="/" render={() => <MainPanel state={props.state} dispatch={props.dispatch} />} />
      <Route exact path="/ylab" render={() => <MainPanel state={props.state} dispatch={props.dispatch} />} />
      <Route path="/servicepage/:name" render={() => <ServicePage state={props.state} />} >
      </Route>
    </div>
  );
}

export default App;
