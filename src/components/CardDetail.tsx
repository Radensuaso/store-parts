import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { Part } from '../models/part/Part';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { partsFromLocalStore } from '../utils/partsFromLocalStore';

interface CardDetailProps {
  part: Part | null;
}

function CardDetail(props: CardDetailProps) {
  const addPart = (part: Part | null): void => {
    if (part) {
      const ps = partsFromLocalStore();
      const psAdded = [...ps, part];
      localStorage.setItem('parts', JSON.stringify(psAdded));
    }
  };

  return (
    <Card className='part-card-detail p-3'>
      <Card.Title>{props.part?.name}</Card.Title>
      <Card.Text>
        <b>Price: </b>
        {props.part?.price}
        <br />
        <b>Type: </b>
        {props.part?.type}
      </Card.Text>
      <div className='d-flex justify-content-end'>
        {props.part && (
          <Button
            className='button-app'
            variant='warning'
            onClick={() => addPart(props.part)}
          >
            <BsFillCartPlusFill />
          </Button>
        )}
      </div>
    </Card>
  );
}

export default CardDetail;
