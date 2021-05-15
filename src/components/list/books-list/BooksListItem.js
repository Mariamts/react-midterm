import { useContext } from 'react';
import { BooksContext } from '../../../contexts/books-provider/BooksProvider';

function BooksListItem({ item }) {
  const { removeItem } = useContext(BooksContext);

  const onRemove = (id) => {
    removeItem(id);
  };
  return (
    <div className="card" style={{ width: '18rem' }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">title: {item.title}</li>
        <li className="list-group-item">author: {item.author}</li>
        <li className="list-group-item">genre: {item.genre}</li>
        <li className="list-group-item">description: {item.description}</li>
        <li className="list-group-item">
            <button className="btn btn-danger" onClick={() => onRemove(item.id)}>remove</button>
        </li>
      </ul>
    </div>
  );
}

export default BooksListItem;