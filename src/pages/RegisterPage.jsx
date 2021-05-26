import React from 'react';
import { useHistory } from "react-router-dom";
import { Style, useStates } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { User, Login } = mongoosy;
import Header from '../components/Header'

export default function RegisterPage({ loginCheck }) {
  // LOGIC

  const s = useStates({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    error: ''
  });

  const history = useHistory();

  const register = async e => {
    e.preventDefault();
    // check that passwords match
    let error = s.password === s.passwordRepeat ?
      '' : 'Passwords does not match...';
    if (error) { s.error = error; return; }
    let { name, email, password } = s;
    let newUser = new User({ name, email, password });
    let result = await newUser.save();
    // check that the server did not give us an error
    error = !result.error ?
      '' : 'Email-address already in use!';
    if (error) { s.error = error; return; }
    // login
    await Login.login({ email, password });
    // update login info
    loginCheck();
    // redirect to the start page
    history.push('/');
  };

  // TEMPLATE
  const render = () => <Style css={css()}>
    <Header/>
    <form onSubmit={register} autoComplete="off">
      <input type="text" placeholder="Your name"
        required {...s.bind('name')} />
      <input type="email" placeholder="Email"
        required {...s.bind('email')} />
      <input type="password" placeholder="Password"
        required minLength="6"{...s.bind('password')} />
      <input type="password" placeholder="Repeat password"
        required minLength="6" {...s.bind('passwordRepeat')} />
      {s.error && <p>{s.error}</p>}
      <input style={{color:'rgba(11, 223, 223, 1)',height:'40',borderStyle:'none',backgroundColor:'rgba(64, 62, 65, 0.178)',fontSize:'20px'}} type="submit" value="SignUp" />
    </form>
  </Style>;

  // STYLE
  const css = () => /*css*/`
  `;

  return render();
}