import { Navbar, Nav, Container } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React from 'react';




function NavBar() {
  const { userDB } = React.useContext(UserContext);
  const { userID, changeUserID } = React.useContext(LoggedInContext);


  const [show, setShow] = React.useState();
  const [name, setName] = React.useState();

  React.useEffect(() => {
    // console.log(ctx, userID, 'este es mi log de navbar');

    if (userID === undefined) {
      // console.log(' NAV es verdad');
      setShow(true)
    } else {
      // console.log('NAV no es verdad');
      setShow(false)
      console.log(userDB.users);
      setName(userDB.users[userID].name);
    }
  }, [userID, userDB.users])


  const logOut = () => {
    // reset context to undefined
    changeUserID(undefined);
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