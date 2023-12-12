import { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/auth-context';

function LoginPage() {
  const [email, setEmail] = useState('zuby123@gmail.com');
  const [password, setPassword] = useState('zuby123');
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  async function logIn() {
    let user = { email, password };
    console.log(user);

    let response = await fetch('https://api.realworld.io/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // console.log(result);
    if (response.status === 200) {
      let result = await response.json();
      localStorage.setItem('user-info', JSON.stringify(result));
      setUser(result);
    }
  }
  if (user) {
    return <Navigate to={'/'} />;
  }
  return (
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            {/* <ul class="error-messages">
              <li>That email is already taken</li>
            </ul> */}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                logIn();
              }}
            >
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
