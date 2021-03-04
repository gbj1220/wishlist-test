import React, { Component } from "react";
import { v4 as itemID } from "uuid";

import Child from "./Child";
import Child2 from "./Child2";

import "./Parent.css";

class Parent extends Component {
  state = {
    wishList: [
      {
        id: itemID(),
        wish: "To be famous",
        isDone: false,
        isEditToggle: false,
        isButtonToggle: false,
        isPriorityToggle: false,
      },
    ],
    inputWish: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let newWishArray = [
      ...this.state.wishList,
      {
        id: itemID(),
        wish: this.state.inputWish,
        isDone: false,
        isEditToggle: false,
      },
    ];

    this.setState({
      wishList: newWishArray,
      inputWish: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      inputWish: event.target.value,
    });
  };

  handleDeleteByID = (id) => {
    let filteredWishListArray = this.state.wishList.filter((item) => {
      if (item.id !== id) {
        item.isButtonToggle = false;
        return item;
      }
    });

    this.setState({
      wishList: filteredWishListArray,
    });
  };

  handleIsDone = (id) => {
    let updatedWishArray = this.state.wishList.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.setState({
      wishList: updatedWishArray,
    });
  };

  handleEditToggle = (id) => {
    let toggleWishList = this.state.wishList.map((item) => {
      if (item.id === id) {
        item.isEditToggle = !item.isEditToggle;
      }
      if (item.id !== id) {
        item.isButtonToggle = !item.isButtonToggle;
      }
      return item;
    });

    this.setState({
      wishList: toggleWishList,
    });
  };

  updateWish = (id, newTodoItem) => {
    let updatedWish = this.state.wishList.map((item) => {
      if (item.id === id) {
        item.wish = newTodoItem;
      }
      return item;
    });

    this.setState({
      wishList: updatedWish,
    });
  };

  priorityStatus = (id) => {
    let priority = this.state.wishList.map((item) => {
      if (item.id === id) {
        return item.priority === !item.priority;
      }
      return item;
    });
    this.setState({
      wishList: priority,
    });
  };

  render() {
    return (
      <div className="parent-container">
        <Child2
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
          inputWish={this.state.inputWish}
        />
        <Child
          wishList={this.state.wishList}
          handleDeleteByID={this.handleDeleteByID}
          handleIsDone={this.handleIsDone}
          handleEditToggle={this.handleEditToggle}
          updateWish={this.updateWish}
          priorityStatus={this.priorityStatus}
        />
      </div>
    );
  }
}

export default Parent;
