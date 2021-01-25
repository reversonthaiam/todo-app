import React, { Component } from "react";
import Grid from "../template/grid";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import IconButton from "../template/iconButton";
import { add, changeDescription, search } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.KeyHandler = this.KeyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  KeyHandler(e) {
    const { add, search, description } = this.props;
    if (e.key === "Enter") {
      e.shiftkey ? Search() : add(description);
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  }

  render() {
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            placeholder="Adicione uma tarefa"
            id="description"
            type="text"
            className="form-control"
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.props.KeyHandler}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={() => add(description)}
          ></IconButton>
          <IconButton
            style="info"
            icon="search"
            onClick={() => search()}
          ></IconButton>
          <IconButton
            style="default"
            icon="close"
            onClick={this.props.handleClear}
          ></IconButton>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
