import React from 'react';
import s from './FiltrPanel.module.css';
import FiltrBtn from './FiltrBtn/FiltrBtn'

import {filtrs} from '../../data/FiltrData/FiltrData'

const createBtn = () => {
   return  filtrs.map( p => <FiltrBtn key={p.id} caption={p.caption} id={p.id}/>);   
}

const FiltrPanel = (props) => {
  return (
    <div className={s.filtrPanel}>
      <div className={s.filtrpanelCaption}>
        Инструменты
      </div>
      <div className={s.filtrpanelBtn}>      
      { createBtn() }
      </div>
    </div>

  );
}

export default FiltrPanel;