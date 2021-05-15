import { Switch, Route } from 'react-router';
import Navigation from './components/navigation';
import AddressPage from './pages/address-page';
import BooksPage from './pages/books-page';
import HomePage from './pages/home-page';
import AuthPage from './pages/auth';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Switch>
        {/* may need change */}
        <Route path="/books">
          <BooksPage />
          {/* <NotesPage /> */}
        </Route>

        {/* amasac */}
        <Route path="/address">
          <AddressPage />
          {/* <ClassCounter title="Class Component Example" initialValue={10} /> */}
        </Route>

        <Route path="/auth">
          {/* auth */}
          <h1>auth</h1>
          <AuthPage />
        </Route>

        <Route path="/">
          <HomePage title="Home" />
          {/* homeshi iyos logout ghilaki */}
          {/* <HomePage /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
