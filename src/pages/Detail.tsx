import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Container from 'react-bootstrap/esm/Container';
import { useParams, useNavigate } from 'react-router-dom';
import BigSpinner from '../components/BigSpinner';
import { getPart } from '../models/part/observables';
import { Part } from '../models/part/Part';

function Detail() {
  const [part, setPart] = useState<Part | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const subscribePart = () => {
    setLoading(true);
    getPart(id ? id : '0').subscribe((res) => {
      setLoading(false);
      if (res) {
        setPart(res);
      } else {
        navigate('*');
      }
    });
  };

  useEffect(() => {
    subscribePart();
  }, []);

  return (
    <Container className='page-container'>
      {loading ? (
        <div className='loading-screen'>
          <BigSpinner />
        </div>
      ) : (
        <Card className='part-card-detail p-3'>
          <Card.Title>{part?.name}</Card.Title>
          <Card.Text>
            <p>
              <b>Price: </b>
              {part?.price}
            </p>
            <p>
              <b>Type: </b>
              {part?.type}
            </p>
          </Card.Text>
          <div className='d-flex justify-content-end'>
            <Button className='button-app'>See details</Button>
          </div>
        </Card>
      )}
    </Container>
  );
}

export default Detail;
