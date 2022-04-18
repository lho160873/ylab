import React from "react";
import s from "./FiltrPanel.module.css";
import FiltrBtn from "./FiltrBtn/FiltrBtn";

const createBtn = (props) => {
  return props.state.filtrs.map((p) => (
    <FiltrBtn
      key={p.id}
      caption={p.caption}
      id={p.id}
      name={p.name}
      isActive={p.isActive}
      icon={p.icon}
      addFiltr={props.addFiltr}
    />
  ));
};

const FiltrPanel = (props) => {
  return (
    <div className={s.filtrPanel}>
      <div className={s.filtrpanelCaption}>Инструменты</div>
      <div className={s.filtrpanelBtn}>{createBtn(props)}</div>
    </div>
  );
};

export default FiltrPanel;
