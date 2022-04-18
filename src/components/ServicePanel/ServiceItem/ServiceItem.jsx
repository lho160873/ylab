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

  let iconRef = React.createRef();

  let changeFavorite = () => {
    console.log("addFavorite");
    console.log(iconRef.current.id);
    props.changeFavorite(iconRef.current.id);
  };

  /*
        <img src={star} className={s.iconSvg} alt="Избанное" onClick={addFavorite} />  
        <img src={Vector} className={s.iconSvg} alt="Избанное" />
        <img src={Vector2} className={s.iconSvg} alt="Избанное" />
        <div className={s.iconFavotite} onClick={addFavorite} />
        <div className={s.iconFavotiteActive} onClick={addFavorite} />*/
  let img = Vector;

  console.log(props.id);
  if (props.id === 0) {
    img = star;
  }
  return (
    <div className={s.serviceItem}>
      <div className={s.iconRow}>
        <Icons id={props.id} name={props.name} icon={props.icon} />
        <img src={img} className={s.iconSvg} alt="Избанное" onClick={changeFavorite} ref={iconRef} id={props.id} />
      </div>

      <NavLink to={path} ref={itemRef} id={props.id}  >

        <h2>{props.name}</h2>
        <br />{props.description}
      </NavLink>
    </div>


  );
}

export default ServiceItem;