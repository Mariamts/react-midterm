import { useContext, useState } from 'react';
import { BooksContext } from '../../../contexts/books-provider/BooksProvider';
import BooksListItem from './BooksListItem';

function BooksList(props) {
  const [test, setTest] = useState('');
  const { bookList = [], loadBooksListAsync } = useContext(BooksContext);
  const search = () => {
    loadBooksListAsync({limit: test});
  };
  return (
    <>
      <input onChange={(event) => setTest(event.target.value)} />
      <button className="btn btn-primary" type="button" onClick={search}>
        Search
      </button>
      {bookList.map((item, index) => {
        return <BooksListItem key={index} item={item} />;
      })}
    </>
  );
}

export default BooksList;