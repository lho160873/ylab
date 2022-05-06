import React from 'react';
import s from './MainPanel.module.css';
import ServicePanel from '../ServicePanel/ServicePanel';
import FiltrPanel from '../FiltrPanel/FiltrPanel';

const createServicePanel = (props) => {
  //let state = props.store.getState().filtrPage;
  let filtrPage = props.filtrPage;
  let stateFiltr = filtrPage.filtrs.filter(item => item.isActive === true);

  if (stateFiltr.length === 1 && stateFiltr[0].name === 'favorites') {
    if (filtrPage.services.find(item => item.isFavorites) === undefined)
      return filtrPage.filtrs.map(p => <ServicePanel filtrs={filtrPage.filtrs} services={filtrPage.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} onChangeFavoriteAction={props.onChangeFavoriteAction} />);
  }

  if (stateFiltr.length > 0)
    return stateFiltr.map(p => <ServicePanel filtrs={filtrPage.filtrs} services={filtrPage.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} onChangeFavoriteAction={props.onChangeFavoriteAction} />);
  else
    return filtrPage.filtrs.map(p => <ServicePanel filtrs={filtrPage.filtrs} services={filtrPage.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} onChangeFavoriteAction={props.onChangeFavoriteAction} />);
}

const MainPanel = (props) => {
  //let state = props.store.getState().filtrPage;
  return (
    <div className={s.mainPanel}>
      <FiltrPanel filtrPage={props.filtrPage} onAddFiltrAction={props.onAddFiltrAction} />
      {createServicePanel(props)}
    </div>
  );
}

export default MainPanel;