import './App.css';
import Header from './components/Header/Header';
import MainPanelContainer from './components/MainPanel/MainPanelContainer';
import { Route } from 'react-router-dom';
import ServicePageContainer from './components/ServicePanel/ServicePage/ServicePageContainer'
//LKhorosheva
const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" render={() => <MainPanelContainer />} />
      <Route exact path="/ylab" render={() => <MainPanelContainer />} />
      <Route path="/servicepage/:name" render={() => <ServicePageContainer />} >
      </Route>
    </div>
  );
}

export default App;
