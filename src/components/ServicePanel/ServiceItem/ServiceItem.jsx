import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ServiceItem.module.css';


const ServiceItem = (props) => {
  let itemRef = React.createRef();

  let setIdService = () => {
    props.setIdService(itemRef.current.id);
  }

  let path = "/servicepage/" + props.name;
  return (    
    <div className={s.serviceItem} >
       <NavLink to={path} onClick={ setIdService } ref={itemRef}  id={props.id}>
      <h2>{props.name}</h2>
      <br />{props.description}  
      </NavLink>
    </div>    
  );
}

export default ServiceItem;