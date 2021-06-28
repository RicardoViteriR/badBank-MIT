import { Card, Image } from 'react-bootstrap';
import bankImg from './bank.png'


function Home() {
  return (

    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <h1>WELCOME TO THE BANK</h1>
        </Card.Title>
        <Card.Text>
          ... you can't trust!
        </Card.Text>
        <Image src={bankImg} fluid alt="Responsive" />
      </Card.Body>
    </Card>

  );
}

export default Home;