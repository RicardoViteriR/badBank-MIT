import { Card } from 'react-bootstrap';

function Balance() {
  return (
    <Card className="text-center" bg="danger" text="white">
      <Card.Body>
        <Card.Title>
          <h1>Balance</h1>
        </Card.Title>
        <Card.Text>
          You can move around using the navigation bar.
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default Balance;