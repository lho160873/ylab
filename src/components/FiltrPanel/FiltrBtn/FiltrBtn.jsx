import React from 'react';
import s from './FiltrBtn.module.css';
import Icons from '../../Icons/Icons';


const FiltrBtn = (props) => {

  let btnRef = React.createRef();

  let addFiltr = () => {
    props.addFiltr(btnRef.current.id);   
  }

  if (props.isActive) {
    return (
      <div className={s.filtrBtnCheck} type="button" onClick={addFiltr} ref={btnRef} id={props.id} name={props.name}>       
           <Icons id={props.id} name={props.name} icon={props.icon}/>
          {props.caption}
      </div>
    );
  }
  else return (
    <div className={s.filtrBtn} type="button" onClick={addFiltr} ref={btnRef} id={props.id} name={props.name}>
         <Icons id={props.id} name={props.name} icon={props.icon}/>
        {props.caption}
    </div>
  );

}






export default FiltrBtn;