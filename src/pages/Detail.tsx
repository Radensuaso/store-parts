import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate, useParams } from 'react-router-dom';
import BigSpinner from '../components/BigSpinner';
import CardDetail from '../components/CardDetail';
import { getSinglePart } from '../models/part/httpRequests';
import { Part } from '../models/part/Part';

function Detail() {
  const [part, setPart] = useState<Part | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getPart = async () => {
    setLoading(true);
    const pData = await getSinglePart(id ? id : '0');
    const p = pData?.data ? pData.data : null;
    setLoading(false);
    if (p) {
      setPart(p);
    } else {
      navigate('*');
    }
  };

  useEffect(() => {
    getPart();
  }, []);

  return (
    <Container className='page-container'>
      {loading ? (
        <div className='loading-screen'>
          <BigSpinner />
        </div>
      ) : (
        <CardDetail part={part} />
      )}
    </Container>
  );
}

export default Detail;
