import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import BigSpinner from '../components/BigSpinner';
import { getParts, getTypes } from '../models/part/observables';
import { Part } from '../models/part/Part';

function HomePage() {
  const [parts, setParts] = useState<Part[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const subscribeParts = () => {
    setLoading(true);
    getParts(query, type).subscribe((res) => {
      setLoading(false);
      if (res) {
        setParts(res);
      } else {
        alert("Couldn't fetch parts.");
      }
    });
  };

  const subscribeTypes = () => {
    getTypes().subscribe((res) => {
      if (res) {
        setTypes(res);
      } else {
        alert("Couldn't fetch types.");
      }
    });
  };

  useEffect(() => {
    subscribeParts();
    subscribeTypes();
  }, []);

  return (
    <Container className='page-container'>
      <InputGroup className='search-bar mb-3'>
        <FormControl placeholder='Search' className='query' />
        <Form.Select className='type'>
          {types.map((type) => (
            <option>{type}</option>
          ))}
        </Form.Select>
        <Button className='button-app price'>Price</Button>
      </InputGroup>
      {loading ? (
        <div className='loading-screen'>
          <BigSpinner />
        </div>
      ) : (
        <Row>
          {parts.map((part) => (
            <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
              <Card className='part-card p-3'>
                <Card.Title>{part.name}</Card.Title>
                <Card.Text>
                  <p>
                    <b>Price: </b>
                    {part.price}
                  </p>
                  <p>
                    <b>Type: </b>
                    {part.type}
                  </p>
                </Card.Text>
                <Link className='btn button-app' to={`/detail/${part.id}`}>
                  See details
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomePage;
