import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ServiceItem.module.css';


const ServiceItem = (props) => {
  return (     
    <div className={s.serviceItem} >
      <NavLink to="/servicepage" name={props.name} description={props.name}>
      <h2>{props.name}</h2>
      <br />{props.description}  
      </NavLink>
    </div>    
  );
}

export default ServiceItem;