import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ServiceItem.module.css';
import Icons from '../../Icons/Icons';
import star from '../../../icons/star.svg';
import Vector from '../../../icons/Vector.svg';
import Vector2 from '../../../icons/Vector 2.svg';


const ServiceItem = (props) => {
  let itemRef = React.createRef();
  let path = "/servicepage/" + props.name.replace(/\s+/g, '').toLowerCase();
  let addFavorite = () => {
    //props.addFiltr(btnRef.current.id);
    console.log("addFavorite");
  };
  /*
        <img src={star} className={s.iconSvg} alt="Избанное" onClick={addFavorite} />  
        <img src={Vector} className={s.iconSvg} alt="Избанное" />
        <img src={Vector2} className={s.iconSvg} alt="Избанное" />
        <div className={s.iconFavotite} onClick={addFavorite} />
        <div className={s.iconFavotiteActive} onClick={addFavorite} />*/

  return (
    <NavLink to={path} ref={itemRef} id={props.id} className={s.serviceItem} >
      <div>
        <Icons id={props.id} name={props.name} icon={props.icon} />
        <h2>{props.name}</h2>
        <br />{props.description}
      </div>
    </NavLink>

  );
}

export default ServiceItem;