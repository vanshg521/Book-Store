const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return state.concat([action.data]);

    case "DELETE_BOOK":
      return state.filter(post => post.id !== action.id);

    case "EDIT_BOOK":
      return state.map(book =>
        book.id === action.id ? { ...book, editing:!book.editing } : book
      );
      case "UPDATE":
          return state.map((book)=>{
              if(book.id === action.id){
                  return{
                      ...book,
                      name:action.data.newName,
                      price:action.data.newPrice,
                      category:action.data.newCategory,
                      description:action.data.newDescription,
                      editing: !book.editing
                  }
              }else return book;
          })
    default:
      return state;
  }
};

export default bookReducer;
