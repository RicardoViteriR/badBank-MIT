import { Card } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React from 'react';



function Login() {

  const ctx = React.useContext(UserContext);
  const { users } = ctx;
  const logInCtx = React.useContext(LoggedInContext);
  let { loggedUserID } = logInCtx;
  const [show, setShow] = React.useState();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  React.useEffect(() => {
    if (loggedUserID === undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [loggedUserID])


  const handleLogin = () => {
    // look for email
    // check password
    // change logInCtx to the index where the user is in UserContext

    let userIndex = undefined;

    users.forEach((el, index) => {
      if (el.email === email) {
        userIndex = index;
      }
    });

    logInCtx.loggedUserID = userIndex;
    if (userIndex !== undefined) setShow(false);

  }



  return (
    <>
      <Card className="text-center" bg="warning" text="black">
        <Card.Body>
          <Card.Title>
            <h1>Login</h1>
          </Card.Title>
          {show ? (
            <>
              Email address<br />
              <input type="input" className="form-control"
                id="email" placeholder="Enter email"
                value={email} onChange={e => setEmail(e.currentTarget.value)} />
              <br />

              Password<br />
              <input type="password" className="form-control"
                id="password" placeholder="Enter password"
                value={password} onChange={e => setPassword(e.currentTarget.value)} />
              <br />

              <button type="submit" className="btn btn-light" onClick={handleLogin}>Log In</button>
            </>
          ) : (
            <>
              <h5>You are Logged In!</h5>
            </>

          )}
        </Card.Body>
      </Card>
    </>

  )
}

export default Login;