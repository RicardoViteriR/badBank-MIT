import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React, { useContext } from 'react';

function Deposit() {
  const { userDB } = useContext(UserContext)
  const { userID } = useContext(LoggedInContext);


  const [currentBalance, setCurrentBalance] = React.useState(0);
  const [currentName, setCurrentName] = React.useState('N/A');
  const [depositAmount, setDepositAmount] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [disabledButton, setDisableButton] = React.useState()


  React.useEffect(() => {
    if (userID !== undefined) {
      let { name, balance } = userDB.users[userID];
      setCurrentName(name);
      setCurrentBalance(balance);
      setShow(true);
    } else {
      setShow(false);
    }

  }, [userDB.users, userID])

  React.useEffect(() => {
    (depositAmount > 0)
      ?
      setDisableButton(false)
      :
      setDisableButton(true)
  }, [depositAmount])

  const depositMoney = (amount, userID) => {
    const result = Math.round((currentBalance + Number(amount)) * 100) / 100;
    return result;
  }

  const handleDeposit = () => {
    let newBalance = depositMoney(depositAmount, userID);
    userDB.users[userID].balance = newBalance;
    setCurrentBalance(newBalance);
  };


  return (

    <Card className="text-center" bg="success" text="white">
      <Card.Body>
        <Card.Title>
          <h1>Deposit</h1>
        </Card.Title>
        <Card.Text>
          {(show) ?
            (<Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label sm="2" column="lg" lg={2}>
                  Available Balance for {currentName}:
                </Form.Label>
                <Col sm="10">
                  <h3>$ {currentBalance}</h3>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column="lg" lg={2} sm="2">
                  Deposit Amount
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="input" placeholder="Enter value" onChange={e => setDepositAmount(e.currentTarget.value)} />
                </Col>
              </Form.Group>
              <br />
              <Button variant="primary" type="submit" onClick={handleDeposit} disabled={disabledButton}>
                Deposit
              </Button>
            </Form>
            ) :
            (<>Please Log In to continue</>)
          }
        </Card.Text>

      </Card.Body>
    </Card >


  )
}

export default Deposit;