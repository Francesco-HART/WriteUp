import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Note } from "../models/Note";

const NoteCard = (props: Note) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt={props.title} />
        <CardBody>
          <CardTitle>{props.title} </CardTitle>
          <CardText>{props.description}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NoteCard;
