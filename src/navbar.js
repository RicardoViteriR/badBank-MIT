import { Navbar, Nav, Container } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React from 'react';




function NavBar() {
  let logInCtx = React.useContext(LoggedInContext);
  console.log(logInCtx.loggedUserID)
  const ctx = React.useContext(UserContext);

  const [show, setShow] = React.useState();
  const [name, setName] = React.useState();

  React.useEffect(() => {
    if (logInCtx.loggedUserID === undefined) {
      setShow(true)
    } else {
      setShow(false)
      setName(ctx.users[logInCtx.loggedUserID].name);
    }
  }, [logInCtx.loggedUserID, ctx.users])



  const logOut = () => {
    // reset context to undefined
    logInCtx = { loggedUserID: undefined };
    setShow(true);
  };

  return (

    <Container>

      <Navbar>
        <Navbar.Brand href="/">Band Bank</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#/deposit/">Deposit</Nav.Link>
            <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
            <Nav.Link href="#/alldata/">AllData</Nav.Link>
            {
              (show) ?
                (
                  <>
                    <Nav.Link href="#/login/">Login</Nav.Link>
                    <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
                  </>
                ) :
                (
                  <>
                    <Navbar.Text>
                      Signed in as: <a href="#/login">{name}</a>
                    </Navbar.Text>
                    <Nav.Link href="#/" onClick={logOut}>Logout</Nav.Link>
                  </>
                )

            }
          </Nav>

        </Navbar.Collapse>
      </Navbar>

    </Container>
  );
}

export default NavBar;