import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React, { useContext } from 'react';


function Withdraw() {
  const ctx = useContext(UserContext)
  const index = useContext(LoggedInContext);
  let { loggedUserID } = index;


  const [currentBalance, setCurrentBalance] = React.useState(0);
  const [currentName, setCurrentName] = React.useState('N/A');
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [show, setShow] = React.useState(false);


  React.useEffect(() => {
    if (loggedUserID !== undefined) {
      let { name, balance } = ctx.users[loggedUserID];
      setCurrentName(name);
      setCurrentBalance(balance);
      setShow(true);
    } else {
      setShow(false);
    }
  }, [ctx.users, loggedUserID])


  const withdrawMoney = (amount) => {
    if (currentBalance >= amount) return (currentBalance - Number(amount));
    return currentBalance;
  }

  const handleWithdraw = () => {
    let newBalance = withdrawMoney(withdrawAmount);
    ctx.users[loggedUserID].balance = newBalance;
    setCurrentBalance(newBalance);
  };

  React.useEffect(() => {
    (withdrawAmount > 0)
      ?
      setDisableButton(false)
      :
      setDisableButton(true)


  }, [withdrawAmount, currentBalance])

  return (

    <Card className="text-center" bg="info" text="white">
      <Card.Body>
        <Card.Title>
          <h1>Withdraw</h1>
        </Card.Title>
        <Card.Text>
          {(show) ?

            (
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label sm="2" column="lg" lg={2}>
                    Available Balance for {currentName}:
                  </Form.Label>
                  <Col sm="10">
                    <div>
                      <h3>$ {currentBalance}</h3>
                    </div>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column="lg" lg={2} sm="2">
                    Withdraw Amount
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="input" placeholder="Enter value" onChange={e => setWithdrawAmount(e.currentTarget.value)} />
                  </Col>
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" onClick={handleWithdraw} disabled={disableButton}>Withdraw</Button>
              </Form>
            ) :
            (<>Please log in to continue</>)
          }

        </Card.Text>
      </Card.Body>
    </Card >


  )
}


export default Withdraw;