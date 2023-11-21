
import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import BooksList from './components/BookList';

function App() {

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
   



    <div className="App">
           <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">BOOK PUBLISHER</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
