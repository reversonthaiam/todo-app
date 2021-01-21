import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => {
  const KeyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftkey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          placeholder="Adicione uma tarefa"
          id="description"
          type="text"
          className="form-control"
          value={props.description}
          onChange={props.handleChange}
          onKeyUp={KeyHandler}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={props.handleSearch}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          onClick={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
};
