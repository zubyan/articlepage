import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/auth-context';

function RegisterPage() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function signUp() {
    let user = { username, email, password };
    // console.log(user);

    let response = await fetch('https://api.realworld.io/api/users', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (response.status === 201) {
      let result = await response.json();
      localStorage.setItem('user-info', JSON.stringify(result));
      navigate('/');
    }

    // console.log(result);
  }
  return (
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ul class="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </fieldset>
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
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
