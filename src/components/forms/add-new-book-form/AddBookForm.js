import { useContext, useState } from 'react';
import { BooksContext } from '../../../contexts/books-provider/BooksProvider';

function AddBookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const { addNewBook } = useContext(BooksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      description,
      id: Math.random.toString(),
    };

    addNewBook(newBook);
    setTitle('');
    setAuthor('');
    setGenre('');
    setDescription('');
  };
  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          author
        </label>
        <textarea
          className="form-control"
          id="author"
          rows="3"
          value={author}
          onChange={({ target }) => {
            setAuthor(target.value);
          }}
          required></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="genre" className="form-label">
          genre
        </label>

        <input
          className="form-control"
          id="genre"
          placeholder="genre"
          value={genre}
          onChange={({ target }) => {
            setGenre(target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder=""
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-md">
        Add book
      </button>
    </form>
  );
}

export default AddBookForm;
