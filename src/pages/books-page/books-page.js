import BooksList from '../../components/list/books-list';
import { withAuthProtected } from '../../hoc';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import BooksProviderComponent from '../../contexts/books-provider/BooksProvider';
import AddBookForm from '../../components/forms/add-new-book-form';

function BooksPage(props) {
  const { pathname } = useLocation();

  return (
    <BooksProviderComponent>
      <div className="row bg-light p-5">
        <div className="col-12 mb-5">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                to="/books/list"
                className={classNames('nav-link', {
                  active: pathname.includes('/list'),
                })}>
                  List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/books/add-new"
                className={classNames('nav-link', {
                  active: pathname.includes('/add-new'),
                })}>
                Add new
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <Switch>
            <Route path="/books/list">
              <BooksList />

            </Route>
            <Route path="/books/add-new">
              {/* <h1>add new</h1> */}
              <AddBookForm />
            </Route>
            <Redirect to="/books/list" />
          </Switch>
        </div>
      </div>

    </BooksProviderComponent>
  );
}

export default withAuthProtected(BooksPage);

