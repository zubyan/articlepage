import { useState } from 'react';

function Header() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/editor">
                {' '}
                <i class="ion-compose"></i>&nbsp;New Article{' '}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/settings">
                {' '}
                <i class="ion-gear-a"></i>&nbsp;Settings{' '}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile/eric-simons">
                <img src="" class="user-pic" />
                Eric Simons
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              {/* <!-- Add "active" class when you're on that page" --> */}
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
