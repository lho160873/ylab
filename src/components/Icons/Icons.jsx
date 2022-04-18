import React from 'react';
import s from './Icons.module.css';



const Icons = (props) => {


  return (
    <img src={props.icon} className={s.iconSvg} alt={props.name} />
  );

}


export default Icons;