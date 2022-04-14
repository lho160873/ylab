import React from 'react';
import s from './FiltrBtn.module.css';
import { NavLink } from 'react-router-dom';
import {filtrs} from '../../../data/FiltrData/FiltrData'

function getService() {
  /*const myList = document.querySelector('tbody');
  fetch('http://89.108.65.107:8006/api/v1/service/')
  .then(response => response.json())
  .then(data => {
    for (const d of data) {
      let tr = document.createElement('tr');
      
      let td_name = document.createElement('td');        
      td_name.innerHTML = '<strong>' + d.name + '</strong>';
      tr.appendChild(td_name);
      
     
    
      myList.appendChild(tr);
    }
  }
  );*/
  let idNew = 6;
  let newFiltr = {
    id: idNew,
    name: 'prediction_new',
    caption: `Прогноз Новый ${idNew}`
  };
  filtrs.push(newFiltr);
  console.log(filtrs);
}

const FiltrBtn = (props) => {
  return (
    <div className={s.filtrBtn} type="button" onClick={getService} id={props.id}>
      <NavLink to="/ylab">
      {props.caption}
      </NavLink>
    </div>
  );
}






export default FiltrBtn;