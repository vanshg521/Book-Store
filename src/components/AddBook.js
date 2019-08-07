import React, { Component } from "react";
import { connect } from "react-redux";
import { Popover, PopoverBody,Button,Form } from 'reactstrap';
import '../../src/assets.css'


class AddBook extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const price = this.getPrice.value;
    const category = this.getCategory.value;
    const description = this.getDescription.value;
    const data = {
      id: new Date(),
      name,
      price,
      category,
      description,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_BOOK",
      data
    });
    this.getName.value = "";
    this.getPrice.value = "";
    this.getCategory.value = "";
    this.getDescription.value = "";
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        
        <Button id="Popover1" type="button">
          Add new Book
        </Button>
        <Popover className="popover" placement="right" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          
          <PopoverBody>
          <Form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getName = input)}
            placeholder="Enter Book Name"
          />
          <br />
          <br />
          <input
            required
            type="text"
            ref={input => (this.getPrice = input)}
            placeholder="Enter Book Price"
          />
          <br />
          <br />
          <input
            required
            type="text"
            ref={input => (this.getCategory = input)}
            placeholder="Enter Book Category"
          />
          <br />
          <br />
          <input
            required
            type="text"
            ref={input => (this.getDescription = input)}
            placeholder="Enter Book Description"
          />
          <br />
          <br />
          <Button color="danger">Add</Button>
        </Form>
          </PopoverBody>
        </Popover>
        
        
      </div>
    );
  }
}
export default connect()(AddBook);
