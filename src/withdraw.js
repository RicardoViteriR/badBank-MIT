import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { UserContext, LoggedInContext } from './index';
import React, { useContext } from 'react';


function Withdraw() {
  const { userDB } = useContext(UserContext)
  const { userID } = useContext(LoggedInContext);


  const [currentBalance, setCurrentBalance] = React.useState(0);
  const [currentName, setCurrentName] = React.useState('N/A');
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [showError, setShowError] = React.useState(false);



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


  const withdrawMoney = (amount) => {
    if (currentBalance >= amount) return Math.round((currentBalance - Number(amount)) * 100) / 100;

    setShowError(true);
    setTimeout(() => {
      setShowError(false)
    }, 2000);

    return currentBalance;
  }

  const handleWithdraw = () => {
    let newBalance = withdrawMoney(withdrawAmount);
    userDB.users[userID].balance = newBalance;
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
                    <br />
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleWithdraw} disabled={disableButton}>Withdraw</Button>
                <br />
                {(showError) ? 'Not enough money to complete this transaction!' : ''}
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