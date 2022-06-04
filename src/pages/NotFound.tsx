import Card from 'react-bootstrap/esm/Card';
import Container from 'react-bootstrap/esm/Container';

function NotFound() {
  return (
    <Container className='page-container'>
      <Card className='not-found p-3'>
        <Card.Body>404 Not Found</Card.Body>
      </Card>
    </Container>
  );
}

export default NotFound;
