import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
            <OverlayTrigger key={'deposit'} placement={'bottom'} overlay={
              <Tooltip id={`tooltip-${'bottom'}`}>
                Deposit some money!
              </Tooltip>
            }
            >
              <Nav.Link href="?#/deposit/">Deposit</Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger key={'withdraw'} placement={'bottom'} overlay={
              <Tooltip id={`tooltip-${'bottom'}`}>
                Get some money!
              </Tooltip>
            }
            >
              <Nav.Link href="?#/withdraw/">Withdraw</Nav.Link>
            </OverlayTrigger>

            <OverlayTrigger key={'allData'} placement={'bottom'} overlay={
              <Tooltip id={`tooltip-${'bottom'}`}>
                See all user's data!
              </Tooltip>
            }
            >
              <Nav.Link href="?#/alldata/">AllData</Nav.Link>
            </OverlayTrigger>
            {
              (show) ?
                (
                  <>
                    <OverlayTrigger key={'login'} placement={'bottom'} overlay={
                      <Tooltip id={`tooltip-${'bottom'}`}>
                        Log in to make transactions!
                      </Tooltip>
                    }
                    >
                      <Nav.Link href="?#/login/">Login</Nav.Link>
                    </OverlayTrigger>

                    <OverlayTrigger key={'createAccount'} placement={'bottom'} overlay={
                      <Tooltip id={`tooltip-${'bottom'}`}>
                        Create an account!
                      </Tooltip>
                    }
                    >
                      <Nav.Link href="?#/CreateAccount/">Create Account</Nav.Link>
                    </OverlayTrigger>
                  </>
                ) :
                (
                  <>
                    <Navbar.Text>
                      Signed in as: <a href="?#/login">{name}</a>
                    </Navbar.Text>


                    <OverlayTrigger key={'logout'} placement={'bottom'} overlay={
                      <Tooltip id={`tooltip-${'bottom'}`}>
                        Good bye!
                      </Tooltip>
                    }
                    >
                      <Nav.Link href="#/" onClick={logOut}>Logout</Nav.Link>
                    </OverlayTrigger>
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