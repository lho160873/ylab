import React from 'react';
import { changeFavoriteActionCreator, addFiltrActionCreator } from "../../data/filtr-reducer";
import MainPanel from './MainPanel'


const MainPanelContainer = (props) => {
  let state = props.store.getState().filtrPage;

  let onAddFiltrAction = (value) => {
    props.store.dispatch(addFiltrActionCreator(value));
  }
  let onChangeFavoriteAction = (idService) => {
    props.store.dispatch(changeFavoriteActionCreator(idService));
  }

  return (
    <MainPanel state={state} onChangeFavoriteAction={onChangeFavoriteAction} onAddFiltrAction={onAddFiltrAction} />
  );
}

export default MainPanelContainer;