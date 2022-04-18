import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ServiceItem.module.css';
import Icons from '../../Icons/Icons';


const ServiceItem = (props) => {
  let itemRef = React.createRef();


  let path = "/servicepage/" + props.name.replace(/\s+/g, '').toLowerCase();
  console.log("ServiceItem");
  console.log(props.icon);
  return (    
    <div className={s.serviceItem} >
      <Icons id={props.id} name={props.name} icon={props.icon}/>
      <NavLink to={path}  ref={itemRef}  id={props.id}>      
      <h2>{props.name}</h2>
      <br />{props.description}  
      </NavLink>
    </div>    
  );
}

export default ServiceItem;