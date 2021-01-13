import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        placeholder="Adicione uma tarefa"
        id="description"
        type="text"
        className="form-control"
        value={props.description}
        onChange={props.handleChange}
      />
    </Grid>

    <Grid cols="12 3 2">
      <IconButton
        style="primary"
        icon="plus"
        onClick={props.handleAdd}
      ></IconButton>
    </Grid>
  </div>
);
