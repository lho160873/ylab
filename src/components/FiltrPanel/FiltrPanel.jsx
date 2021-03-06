import React from "react";
import s from "./FiltrPanel.module.css";
import FiltrBtn from "./FiltrBtn/FiltrBtn";

const createBtn = (props) => {

  return props.filtrPage.filtrs.map((p) => {
    let isNotEmpty = true;
    if (p.name === 'favorites') {
      if (props.filtrPage.services.find(item => item.isFavorites) === undefined) {
        isNotEmpty = false;
      }
    }
    if (isNotEmpty) {
      return (
        <FiltrBtn
          key={p.id}
          caption={p.caption}
          id={p.id}
          name={p.name}
          isActive={p.isActive}
          icon={p.icon}
          onAddFiltrAction={props.onAddFiltrAction}
        />
      );
    }
    else {
      return ('');
    }
  });
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
