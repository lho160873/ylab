import React from 'react';
import s from './ServiceItem.module.css';

const ServiceItem = () => {
  return (
    <div className={s.serviceItem}>
      Сервис
      <br />Service
      <br />Данный сервис предназначен для ....
    </div>
  );
}

export default ServiceItem;