import LeftSideInfo from './components/LeftSideInfo';
import Main from './components/Main';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Row>
          <Col xs={3} id="sideInfo">
            <LeftSideInfo></LeftSideInfo>
          </Col>
          <Col xs={9} className="p-0">
            <Main></Main>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
