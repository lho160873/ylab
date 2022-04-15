import React from 'react';
import s from './ServicePanel.module.css';
import ServiceItem from './ServiceItem/ServiceItem';


const createService = (props) => { 
  let serviceFiltr = props.services.filter( item => item.category==props.name);
  return  serviceFiltr.map( p => <ServiceItem description={p.description} name={p.name} key={p.id} setIdService={props.setIdService} id={p.id}/>);   
}

const ServicePanel = (props) => {
  return (
    <div className={s.servicePanel}>      
      <div className={s.serviceCaption}>
      {props.caption}
      </div>
      <div className={s.servicePanelItem}>
        {createService(props) }
      </div>    
    </div>
  );
}

export default ServicePanel;