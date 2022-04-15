import React from 'react';
import s from './ServicePage.module.css';
import Icons from '../../Icons/Icons';

const ServicePage = (props) => {
  let currentId = props.getIdService()
  let currentService=props.state.services.find( item => item.id==currentId )
  return (
    <div className={s.servicePage} >      
      <h2>      
      {currentService.name}</h2>
      <br />{currentService.description}      
    </div>        
  );
}

export default ServicePage;