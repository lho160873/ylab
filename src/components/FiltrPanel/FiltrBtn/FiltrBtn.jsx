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
  console.log("FiltrBtn");
  console.log(props.isActive);
  if (props.isActive) {
    return (
      <div className={s.filtrBtnCheck} type="button" onClick={addFiltr} ref={btnRef} id={props.id} name={props.name}>       
          {props.caption}
      </div>
    );
  }
  else return (
    <div className={s.filtrBtn} type="button" onClick={addFiltr} ref={btnRef} id={props.id} name={props.name}>
        {props.caption}
    </div>
  );

}






export default FiltrBtn;