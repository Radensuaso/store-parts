import Card from 'react-bootstrap/esm/Card';
import { Link } from 'react-router-dom';
import { Part } from '../models/part/Part';
import { AiFillDelete } from 'react-icons/ai';
import Button from 'react-bootstrap/esm/Button';

interface CardListProps {
  part: Part;
  delete?: boolean;
  removePart?: (part: Part) => void;
}

function CardList(props: CardListProps) {
  return (
    <Card className='part-card p-3'>
      <Card.Title>{props.part.name}</Card.Title>
      <Card.Text>
        <b>Price: </b>
        {props.part.price}
        <br />
        <b>Type: </b>
        {props.part.type}
      </Card.Text>
      <div className='d-flex justify-content-end'>
        <Link
          className='btn btn-warning button-app'
          to={`/detail/${props.part.id}`}
        >
          See details
        </Link>
        {props.delete && (
          <Button
            variant='danger'
            onClick={() => props.removePart && props.removePart(props.part)}
          >
            <AiFillDelete />
          </Button>
        )}
      </div>
    </Card>
  );
}

export default CardList;
