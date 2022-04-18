import React from 'react';
import s from './MainPanel.module.css';
import ServicePanel from '../ServicePanel/ServicePanel';
import FiltrPanel from '../FiltrPanel/FiltrPanel';

const createServicePanel = (props) => { 
  let stateFiltr = props.state.filtrs.filter( item => item.isActive == true);
  if (stateFiltr.length >0 )
  return  stateFiltr.map( p => <ServicePanel services={props.state.services} name={p.name} caption={p.caption}  icon={p.icon} key={p.id} id={p.id} />);   
  else 
  return  props.state.filtrs.map( p => <ServicePanel services={props.state.services} name={p.name} caption={p.caption} icon={p.icon} key={p.id} id={p.id} />);   
}

const MainPanel = (props) => {
  return (
    <div className={s.mainPanel}>      
      <FiltrPanel state={props.state} addFiltr={props.addFiltr}/>          
      {createServicePanel(props)}
    </div>
  );
}

export default MainPanel;