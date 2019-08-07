import React, { Component } from "react";
import {Card,CardBody, CardTitle,CardSubtitle,CardText,Button, Popover,Form,Input,FormGroup,Label} from "reactstrap";
import { connect } from "react-redux";


class Book extends Component {
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
        <Card>
          <CardBody>
            <CardTitle>Name: {this.props.book.name}</CardTitle>
           
            <Button id="Popover2" type="button">
              Detail
            </Button>
            <Popover
              className="popover"
              placement="bottom"
              isOpen={this.state.popoverOpen}
              target="Popover2"
              toggle={this.toggle}
            >
              <Form className="form">
                <FormGroup>
                  <Label for="name">Name</Label>
                    <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder={this.props.book.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="price">Price</Label>
                  <Input
                    type="price"
                    name="price"
                    id="price"
                    placeholder={this.props.book.price}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Input
                    type="category"
                    name="category"
                    id="category"
                    placeholder={this.props.book.category}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="description"
                    name="description"
                    id="description"
                    placeholder={this.props.book.description}
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    onClick={() =>
                      this.props.dispatch({
                        type: "EDIT_BOOK",
                        id: this.props.book.id
                      })
                    }
                  >
                    Edit
                  </Button>
                </FormGroup>
                <FormGroup>
                  <Button
                    onClick={() =>
                      this.props.dispatch({
                        type: "DELETE_BOOK",
                        id: this.props.book.id
                      })
                    }
                  >
                    Delete
                  </Button>
                </FormGroup>
              </Form>
            </Popover>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default connect()(Book);
