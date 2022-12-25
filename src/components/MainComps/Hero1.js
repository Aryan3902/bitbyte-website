import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import coverImg from '../../assets-old/images/COVER-1.png';
import ButtonCustom from '../Basics/buttonComponent';

export default function Hero1() {
  return (
    <Container fluid>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column text-left justify-content-center"
        >
          <h1 className="h-2 text-light">
            Business Planning
            <br />
            Digital Technology
            <br />
            Modern Solution !
          </h1>
          <p className="light-blue-text h6 my-md-2">
            We deliver Custom Application Development solutions within the
            context of our client's business objectives and requirement.
          </p>
          <div className="m-auto my-md-2">
            <ButtonCustom
              color="#ea4802"
              content="Explore"
              classAdd="px-md-5 mx-md-3 fw-bold"
            />
            <ButtonCustom
              color="#1484e0"
              content="Contact"
              classAdd="px-md-5 mx-md-3 fw-bold"
            />
          </div>
        </Col>
        <Col md={6}>
          <Image src={coverImg} alt="Cover Image" className="p-md-4" fluid />
        </Col>
      </Row>
    </Container>
  );
}
