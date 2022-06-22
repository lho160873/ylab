import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainPanelContainer from './components/MainPanel/MainPanelContainer';
import { Route } from 'react-router-dom';
import ServicePageContainer from './components/ServicePanel/ServicePage/ServicePageContainer'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer'
//LKhorosheva br_hlv_1_4
const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path="/" render={() => <MainPanelContainer />} />
      <Route exact path="/ylab" render={() => <MainPanelContainer />} />
      <Route path="/servicepage/:name" render={() => <ServicePageContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
    </div >
  );
}

export default App;
