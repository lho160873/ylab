import React from 'react';
import s from './ServicePanel.module.css';
import ServiceItem from './ServiceItem/ServiceItem';
import Icons from '../Icons/Icons';


const createService = (props) => { 
  let serviceFiltr = props.services.filter( item => item.category==props.name);
  return  serviceFiltr.map( p => <ServiceItem description={p.description} name={p.name} key={p.id} setIdService={props.setIdService} icon={props.icon} id={p.id}/>);   
}

const ServicePanel = (props) => {
  return (
    <div className={s.servicePanel}>      
      <div className={s.serviceCaption}>
      <Icons id={props.id} name={props.name} icon={props.icon}/>
      {props.caption}
      </div>
      <div className={s.servicePanelItem}>
        {createService(props) }
      </div>    
    </div>
  );
}

export default ServicePanel;