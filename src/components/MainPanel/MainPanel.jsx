import React from 'react';
import s from './MainPanel.module.css';
import ServicePanel from '../ServicePanel/ServicePanel';
import FiltrPanel from '../FiltrPanel/FiltrPanel';

const createServicePanel = (props) => {
  let stateFiltr = props.state.filtrs.filter(item => item.isActive === true);

  if (stateFiltr.length === 1 && stateFiltr[0].name === 'favorites') {
    if (props.state.services.find(item => item.isFavorites) === undefined)
      return props.state.filtrs.map(p => <ServicePanel filtrs={props.state.filtrs} services={props.state.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} changeFavorite={props.changeFavorite} />);
  }

  if (stateFiltr.length > 0)
    return stateFiltr.map(p => <ServicePanel filtrs={props.state.filtrs} services={props.state.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} changeFavorite={props.changeFavorite} />);
  else
    return props.state.filtrs.map(p => <ServicePanel filtrs={props.state.filtrs} services={props.state.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} changeFavorite={props.changeFavorite} />);
}

const MainPanel = (props) => {
  return (
    <div className={s.mainPanel}>
      <FiltrPanel state={props.state} addFiltr={props.addFiltr} />
      {createServicePanel(props)}
    </div>
  );
}

export default MainPanel;