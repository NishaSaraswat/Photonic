import React from 'react';
import { useHistory } from "react-router-dom";
import { Style, useStates } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;
import { TextField } from '@material-ui/core';
import './CommonCss/main.css'



export default function LoginPage({ loginCheck }) {
  // LOGIC

  const s = useStates({
    email: '',
    password: '',
    error: ''
  });

  const history = useHistory();

  const login = async e => {
    e.preventDefault();
    let { email, password } = s;
    // try to login
    let result = await Login.login({ email, password });
    if (result.js.error) { s.error = 'Login failed'; return; }
    // update login info
    loginCheck();
    // redirect to the start page
    history.push('/');
  };

  // TEMPLATE
  const render = () => <Style css={css()}>
    
    <form onSubmit={login}>
      <TextField type="email" label="Email" color='secondary'
        required {...s.bind('email')} />
      <TextField type="password" label="Password" color='secondary'
        required minLength="6"{...s.bind('password')} />
      {s.error && <p>{s.error}</p>}
      <input type="submit" value="Log in" />
    </form>
  </Style>;

  // STYLE
  const css = () => /*css*/`
  `;

  return render();
}