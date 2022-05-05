import './App.css';
import Header from './components/Header/Header';
import MainPanelContainer from './components/MainPanel/MainPanelContainer';
import { Route } from 'react-router-dom';
import ServicePage from './components/ServicePanel/ServicePage/ServicePage'
//LKhorosheva
const App = (props) => {
  return (
    <div>
      <Header />
      <Route exact path="/" render={() => <MainPanelContainer store={props.store} />} />
      <Route exact path="/ylab" render={() => <MainPanelContainer store={props.store} />} />
      <Route path="/servicepage/:name" render={() => <ServicePage store={props.store} />} >
      </Route>
    </div>
  );
}

export default App;
