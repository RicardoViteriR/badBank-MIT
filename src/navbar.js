import { Navbar, Nav, Container } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React from 'react';




function NavBar() {
  let logInCtx = React.useContext(LoggedInContext);
  const ctx = React.useContext(UserContext);

  const [show, setShow] = React.useState();
  const [name, setName] = React.useState();

  React.useEffect(() => {
    if (logInCtx.loggedIndex === undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [logInCtx.loggedIndex])

  React.useEffect(() => {
    if (logInCtx.loggedIndex !== undefined) {
      setName(ctx.users[logInCtx.loggedIndex].name);

    }
  }, [logInCtx.loggedIndex, ctx.users])


  const logOut = () => {
    // reset context to undefined
    logInCtx = { loggedIndex: undefined };
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
            <Nav.Link href="#/balance/">Balance</Nav.Link>
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