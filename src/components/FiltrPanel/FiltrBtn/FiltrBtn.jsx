import React from 'react';
import s from './FiltrBtn.module.css';

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
  alert("OK");
}

const FiltrBtn = () => {
  return (
    <div className={s.filtrBtn} type="button" onClick={getService}>
      Фильтры
    </div>
  );
}






export default FiltrBtn;