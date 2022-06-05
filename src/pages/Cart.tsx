import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import CardList from '../components/CardList';
import { Part } from '../models/part/Part';
import { partsFromLocalStore } from '../utils/partsFromLocalStore';

function Cart() {
  const [parts, setParts] = useState<Part[]>([]);

  const removePart = (part: Part): void => {
    const ps = partsFromLocalStore();
    const psFiltered = ps.filter((p) => p.id !== part.id);
    localStorage.setItem('parts', JSON.stringify(psFiltered));
    setParts(psFiltered);
  };

  useEffect(() => {
    setParts(partsFromLocalStore());
  }, []);

  return (
    <Container className='page-container'>
      <h1>Cart</h1>
      <Row>
        {parts.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          parts.map((part) => (
            <Col
              key={part.id.toString()}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className='mb-3'
            >
              <CardList part={part} delete={true} removePart={removePart} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Cart;
