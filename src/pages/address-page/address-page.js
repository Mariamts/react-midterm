import AddressList from '../../components/list/address-list';
import AddressProviderComponent from '../../contexts/address-provider';
import { withAuthProtected } from '../../hoc';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import AddAddressForm from '../../components/forms/add-new-address';

function AddressPage(props) {
  const { pathname } = useLocation();

  return (
    <AddressProviderComponent>
      <div className="row bg-light p-5">
        <div className="col-12 mb-5">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                to="/address/list"
                className={classNames('nav-link', {
                  active: pathname.includes('/list'),
                })}>
                  List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/address/add-new"
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
            <Route path="/address/list">
              <AddressList />

            </Route>
            <Route path="/address/add-new">
              {/* <h1>add new</h1> */}
              <AddAddressForm />
            </Route>
            <Redirect to="/address/list" />
          </Switch>
        </div>
      </div>

    </AddressProviderComponent>
  );
}

export default withAuthProtected(AddressPage);
