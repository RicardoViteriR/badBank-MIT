import { Card } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React, { useContext } from 'react';

function Balance() {

  const ctx = useContext(UserContext)
  const index = useContext(LoggedInContext);
  let { loggedUserID } = index;
  console.log(loggedUserID);


  const [currentBalance, setCurrentBalance] = React.useState(0);
  const [currentName, setCurrentName] = React.useState('No one');

  React.useEffect(() => {
    if (loggedUserID !== undefined) {
      let { name, balance } = ctx.users[loggedUserID];
      setCurrentName(name);
      setCurrentBalance(balance);
      console.log(balance)
    }

  }, [ctx.users, loggedUserID])


  return (
    <Card className="text-center" bg="danger" text="white">
      <Card.Body>
        <Card.Title>
          <h1>Balance {(loggedUserID !== undefined) ? `for ${currentName} is $${currentBalance}` : ''}</h1>
        </Card.Title>
      </Card.Body>
    </Card>

  )
}

export default Balance;