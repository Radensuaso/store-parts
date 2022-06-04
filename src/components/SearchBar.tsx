import Button from "react-bootstrap/esm/Button";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";

function SearchBar() {
  return (
    <InputGroup>
      <FormControl placeholder="Search" />
      <Button variant="outline-secondary">Button</Button>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup>
  );
}

export default SearchBar;
