import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/api';

export const BooksContext = React.createContext(null);

function BooksProviderComponent({ children }) {

  const [bookList, setBooksList] = useState([]);

  const loadBooksListAsync = async (filters = {}) => {
    const list = await API_SERVICE.getBooksList(filters);
    setBooksList(list);
  };

  const removeItem = (id) => {
    const newList = bookList.filter((n) => n.id !== id);
    setBooksList(newList);
  }

  const addNewBook = (newBooks) => {
    const newList = [...bookList, newBooks];
    setBooksList(newList);
  }


  useEffect(() => {
    loadBooksListAsync();
  }, []);

  BooksContext.displayName = 'BooksContext';

  return (
    <BooksContext.Provider value={{ addNewBook, removeItem, setBooksList, bookList, loadBooksListAsync }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProviderComponent;