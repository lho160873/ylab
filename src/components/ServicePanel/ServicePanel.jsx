import React from 'react';
import s from './ServicePanel.module.css';
import ServiceItem from './ServiceItem/ServiceItem';

import {services} from '../../data/ServiceData/ServiceData'
import {filtrs} from '../../data/FiltrData/FiltrData'

const createService = (n) => { 
  let serviceFiltr = services.filter( item => item.category==n);
  return  serviceFiltr.map( p => <ServiceItem description={p.description} name={p.name} key={p.id}/>);   
}

const ServicePanel = (props) => {
  return (
    <div className={s.servicePanel}>      
      <div className={s.serviceCaption}>
      {props.caption}
      </div>
      <div className={s.servicePanelItem}>
        {createService(props.name) }
      </div>    
    </div>
  );
}

export default ServicePanel;