import React from 'react';
import s from './ServicePage.module.css';
import { useParams } from 'react-router-dom';

const ServicePage = (props) => {
  const params = useParams();

  let currentService = props.state.services.find(item => item.name.replace(/\s+/g, '').toLowerCase() === params.name)
  return (
    <div className={s.servicePage} >
      <h2>{currentService.name}</h2>
      <br />{currentService.description}
    </div>
  );
}

export default ServicePage;