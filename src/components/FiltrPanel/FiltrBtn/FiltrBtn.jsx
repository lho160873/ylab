import React from 'react';
import s from './FiltrBtn.module.css';
import { NavLink } from 'react-router-dom';


const FiltrBtn = (props) => {

  let btnRef = React.createRef();

  let addFiltr = () => {
    props.addFiltr(btnRef.current.id);
    /*let idNew = 6;
    let newFiltr = {
      id: idNew,
      name: 'prediction_new',
      caption: `Прогноз Новый ${idNew}`
    };
    filtrs.push(newFiltr);
    console.log(filtrs);
    console.log("Выбрана кнопка "+btnRef.current.name)*/
  }

  return (
    <div className={s.filtrBtn} type="button">      
      <NavLink to="/ylab" onClick={ addFiltr } ref={btnRef}  id={props.id} name={props.name}>
      {props.caption}
      </NavLink>    
    </div>
  );
}






export default FiltrBtn;