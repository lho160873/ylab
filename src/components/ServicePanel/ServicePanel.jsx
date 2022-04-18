import React from 'react';
import s from './ServicePanel.module.css';
import ServiceItem from './ServiceItem/ServiceItem';
import Icons from '../Icons/Icons';


const createService = (props) => {
  console.log(props.name)
  if (props.name == "favorites") {
    let serviceFiltr = props.services.filter(item => item.isFavorites);
    return serviceFiltr.map(p => <ServiceItem description={p.description} name={p.name} key={p.id} icon={props.icon} id={p.id} changeFavorite={props.changeFavorite} />);
  }
  else {
    let serviceFiltr = props.services.filter(item => item.category == props.name && !item.isFavorites);
    return serviceFiltr.map(p => <ServiceItem description={p.description} name={p.name} key={p.id} icon={props.icon} id={p.id} changeFavorite={props.changeFavorite} />);
  }
}

const ServicePanel = (props) => {
  let isNotEmpty = true;
  if (props.name === "favorites") {
    if (props.services.find(item => item.isFavorites) == undefined) {
      isNotEmpty = false;
    }
  }
  console.log("ServicePanel");
  console.log(isNotEmpty);
  if (isNotEmpty)
    return (
      <div className={s.servicePanel}>
        <div className={s.serviceCaption}>
          <Icons id={props.id} name={props.name} icon={props.icon} />
          {props.caption}
        </div>
        <div className={s.servicePanelItem}>
          {createService(props)}
        </div>
      </div>
    );
  else {
    return ("")
  }
}

export default ServicePanel;