import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <Container className="page-container">
      <SearchBar />
      <Row></Row>
    </Container>
  );
}

export default HomePage;
