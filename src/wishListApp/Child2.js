import React, { Component } from "react";
import PropTypes from "prop-types";

class Child2Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Todo"
            name="inputWish"
            onChange={this.props.handleOnChange}
            value={this.props.inputWish}
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

Child2Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  inputWish: PropTypes.string.isRequired,
};

export default Child2Form;
