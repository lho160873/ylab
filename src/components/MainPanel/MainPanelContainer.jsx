
import { changeFavoriteActionCreator, addFiltrActionCreator } from "../../data/filtr-reducer";
import MainPanel from './MainPanel'
import { connect } from "react-redux";

/*
const MainPanelContainer = (props) => {


  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().filtrPage;

        let onAddFiltrAction = (value) => {
          store.dispatch(addFiltrActionCreator(value));
        }
        let onChangeFavoriteAction = (idService) => {
          store.dispatch(changeFavoriteActionCreator(idService));
        }
        return <MainPanel state={state} onChangeFavoriteAction={onChangeFavoriteAction} onAddFiltrAction={onAddFiltrAction} />
      }
      }
    </StoreContext.Consumer>
  );
}*/

let mapStateToProps = (state) => {
  return {
    filtrPage: state.filtrPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onAddFiltrAction: (value) => {
      dispatch(addFiltrActionCreator(value));
    },
    onChangeFavoriteAction: (idService) => {
      dispatch(changeFavoriteActionCreator(idService));
    }
  }
}
const MainPanelContainer = connect(mapStateToProps, mapDispatchToProps)(MainPanel);
export default MainPanelContainer;