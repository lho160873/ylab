import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ServiceItem.module.css";
import Icons from "../../Icons/Icons";
import { ReactComponent as Vector } from "../../../icons/vector.svg";
import { ReactComponent as Star } from "../../../icons/star.svg";

const ServiceItem = (props) => {
  let itemRef = React.createRef();
  let path = "/servicepage/" + props.name.replace(/\s+/g, "").toLowerCase();

  let iconRef = React.createRef();

  let changeFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    props.changeFavorite(iconRef.current.id);
  };

  let icon = props.icon;
  if (props.categoryCaption === 'favorites') {
    let itemIcon = props.filtrs.find(item => item.name === props.categoryMain);
    if (itemIcon != undefined)
      icon = itemIcon.icon;
  }
  return (
    <NavLink to={path} ref={itemRef} id={props.id} className={s.serviceItem}>
      <div className={s.iconRow}>
        <Icons id={props.id} name={props.name} icon={icon} />
        <div onClick={changeFavorite} ref={iconRef} id={props.id}>
          {props.categoryCaption === 'favorites' ? (
            <Star className={s.iconSvg} />
          ) : (
            <Vector className={s.iconSvg} />
          )}
        </div>
      </div>

      <div>
        <h2>{props.name}</h2>
        <br />
        {props.description}
      </div>
    </NavLink>
  );
};

export default ServiceItem;
