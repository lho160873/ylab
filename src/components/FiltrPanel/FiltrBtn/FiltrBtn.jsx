import React from "react";
import s from "./FiltrBtn.module.css";
import Icons from "../../Icons/Icons";
import { addFiltrActionCreator } from "../../../data/filtr-reducer";

const FiltrBtn = (props) => {
  let btnRef = React.createRef();

  let addFiltr = () => {
    let action = addFiltrActionCreator(btnRef.current.id);
    props.dispatch(action)
  };

  if (props.isActive) {
    return (
      <div
        className={`${s.filtrBtn} ${s.filtrBtnCheck}`}
        type="button"
        onClick={addFiltr}
        ref={btnRef}
        id={props.id}
        name={props.name}
      >
        <Icons id={props.id} name={props.name} icon={props.icon} />
        <span>{props.caption}</span>
      </div>
    );
  } else
    return (
      <div
        className={`${s.filtrBtn} ${s.filtrBtnNotCheck}`}
        type="button"
        onClick={addFiltr}
        ref={btnRef}
        id={props.id}
        name={props.name}
      >
        <Icons id={props.id} name={props.name} icon={props.icon} />
        <span>{props.caption}</span>
      </div>
    );
};

export default FiltrBtn;
