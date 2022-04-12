import React from 'react';
import s from './ServicePanel.module.css';
import ServiceItem from './ServiceItem/ServiceItem';

const ServicePanel = () => {
  return (
    <div className={s.servicePanel}>
      <div className={s.serviceCaption}>
        Заголовок инструмента
      </div>
      <div className={s.servicePanelItem}>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </div>
  );
}

export default ServicePanel;