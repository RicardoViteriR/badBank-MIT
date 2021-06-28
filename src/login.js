import { Card } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React from 'react';



function Login() {

  const { userDB } = React.useContext(UserContext);
  const { userID, changeUserID } = React.useContext(LoggedInContext);
  const [show, setShow] = React.useState();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // console.log(userDB.users, 'users from login');

  React.useEffect(() => {
    if (userID === undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [userID])


  const handleLogin = () => {
    // look for email
    // check password (not implemented)
    // change logInCtx to the index where the user is in UserContext

    let userIndex = undefined;

    userDB.users.forEach((el, index) => {
      if (el.email === email) {
        userIndex = index;
      }
    });

    changeUserID(userIndex);

    if (userID !== undefined) setShow(false);

  }



  return (
    <>
      <Card className="text-center" bg="warning" text="black">
        <Card.Body>
          <Card.Title>
            <h1>Login</h1>
          </Card.Title>
          {(show) ? (
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