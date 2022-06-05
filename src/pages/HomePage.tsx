import { ChangeEvent, useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Row from 'react-bootstrap/esm/Row';
import BigSpinner from '../components/BigSpinner';
import CardList from '../components/CardList';
import {
  getMultipleParts,
  getMultipleTypes,
} from '../models/part/httpRequests';
import { Part } from '../models/part/Part';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function HomePage() {
  const [parts, setParts] = useState<Part[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [priceAsc, setPriceAsc] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const sortByPrice = (data: Part[]) => {
    if (priceAsc) {
      setParts(
        data.sort(
          (a: Part, b: Part) =>
            parseInt(a.price.replace('$', '')) -
            parseInt(b.price.replace('$', ''))
        )
      );
    } else {
      setParts(
        data.sort(
          (a: Part, b: Part) =>
            parseInt(b.price.replace('$', '')) -
            parseInt(a.price.replace('$', ''))
        )
      );
    }
  };

  const getParts = async () => {
    setLoading(true);
    const psData = await getMultipleParts(query, type);
    const ps = psData?.data ? psData.data : [];
    sortByPrice(ps);
    setLoading(false);
  };

  const getTypes = async () => {
    const tsData = await getMultipleTypes();
    const ts = tsData?.data ? tsData.data : [];
    ts && setTypes(['', ...ts]);
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const onTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setType(e.target.value);
  };

  const togglePrice = (): void => {
    setPriceAsc(!priceAsc);
  };

  useEffect(() => {
    getTypes();
  }, []);

  useEffect(() => {
    getParts();
  }, [query, type, priceAsc]);

  return (
    <Container className='page-container'>
      <InputGroup className='search-bar mb-3'>
        <FormControl
          placeholder='Search'
          className='query'
          onChange={onSearch}
        />
        <Form.Select className='type' onChange={onTypeChange}>
          {types.map((type) => (
            <option>{type}</option>
          ))}
        </Form.Select>
        <Button
          className='button-app price'
          onClick={togglePrice}
          variant='warning'
        >
          <div className='d-flex align-items-center'>
            <span className='me-1'>Price </span>
            <b>{priceAsc ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</b>
          </div>
        </Button>
      </InputGroup>
      {loading ? (
        <div className='loading-screen'>
          <BigSpinner />
        </div>
      ) : (
        <Row>
          {parts.map((part) => (
            <Col
              key={part.id.toString()}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className='mb-3'
            >
              <CardList part={part} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomePage;
