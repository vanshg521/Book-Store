import React, { Component } from "react";
import { connect } from "react-redux";

 class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newName = this.getName.value;
    const newPrice = this.getPrice.value;
    const newCategory = this.getCategory.value;
    const newDescription = this.getDescription.value;
    const data = {
      newName,
      newPrice,
      newCategory,
      newDescription
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.book.id, data: data });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <label>Name: </label>
          <input
            required
            type="text"
            ref={input => (this.getName = input)}
            defaultValue={this.props.book.name}
            placeholder="Enter Book Name"
          />
          <br />
          <br />
          <label>Price: </label>
          <input
            required
            type="text"
            ref={input => (this.getPrice = input)}
            defaultValue={this.props.book.price}
            placeholder="Enter Book Price"
          />
          <br />
          <br />
          <label>Category: </label>
          <input
            required
            type="text"
            ref={input => (this.getCategory = input)}
            defaultValue={this.props.book.category}
            placeholder="Enter Book Category"
          />
          <br />
          <br />
          <label>Description: </label>
          <input
            required
            type="text"
            ref={input => (this.getDescription = input)}
            defaultValue={this.props.book.description}
            placeholder="Enter Book Description"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
