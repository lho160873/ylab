import React from 'react';
import s from './FiltrPanel.module.css';
import FiltrBtn from './FiltrBtn/FiltrBtn'


const FiltrPanel = () => {
  return (
    <div className={s.filtrPanel}>
      <div className={s.filtrpanelCaption}>
        Инструменты
      </div>
      <div className={s.filtrpanelBtn}>
        <FiltrBtn />
        <FiltrBtn />
        <FiltrBtn />
      </div>
    </div>

  );
}

export default FiltrPanel;