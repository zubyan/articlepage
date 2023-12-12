import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { Link } from 'react-router-dom';

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const isLoggedIn = !!user;

  //   console.log(isLoggedIn, user);
  function logout() {
    localStorage.removeItem('user-info');
    setUser(null);
  }
  if (isLoggedIn) {
    return (
      <nav class="navbar navbar-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            conduit
          </Link>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <Link class="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/editor">
                {' '}
                <i class="ion-compose"></i>&nbsp;New Article{' '}
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/settings">
                {' '}
                <i class="ion-gear-a"></i>&nbsp;Settings{' '}
              </Link>
            </li>
            <li class="nav-item">
              <button class="nav-link" onClick={logout}>
                {' '}
                <i class="ion-gear-a"></i>&nbsp;Logout{' '}
              </button>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/profile/eric-simons">
                <img src="" class="user-pic" />
                {user.username}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
