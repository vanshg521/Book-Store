import React, { Component } from "react";
import { connect } from "react-redux";
import Book from "./Book";
import EditComponent from "./EditComponent";

class AllBook extends Component {
  render() {
    return (
      <div>
        <h1>All Books</h1>
        {this.props.books.map(book => (
          <div key={book.id}>
            {book.editing ? (
              <EditComponent book={book} key={book.id} />
            ) : (
              <Book key={book.id} book={book} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state
  };
};

export default connect(mapStateToProps)(AllBook);
