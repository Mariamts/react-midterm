import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from 'react-router';
import { logOut } from '../../services';
import css from './home.module.css';

const isAuthorized = () => {
  const token = JSON.parse(localStorage.getItem('auth.token'));
  return Boolean(token);
};

function HomePage(props) {
  const history = useHistory();
  const onLogOut = async () => {
    await logOut();
  history.replace('/auth');
  };

  return (
    <div>
      <h2 className={classNames(css.title)}>{props.title}</h2>
      {isAuthorized() && (
        <button className="btn btn-light btn-lg mb-3" onClick={onLogOut}>
          Log Out
        </button>
      )}
    </div>
  );
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
