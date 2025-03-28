import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row className="my-4">
        <Col className="text-center">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" 
            fluid 
            rounded 
            alt="Metropolitan Museum of Art" 
          />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <p>
            The Metropolitan Museum of Art, located in New York City, is one of the world's largest and most comprehensive art museums. 
            Founded in 1870, the museum spans over 2 million square feet and houses over 2 million works of art spanning 5,000 years of human creativity. 
            Its collections represent various periods, cultures, and artistic media, making it a premier destination for art lovers and scholars alike.
          </p>
        </Col>
        <Col lg={6}>
          <p>
            From ancient Egyptian artifacts to contemporary art, The Met's vast collection includes everything from paintings and sculptures to 
            decorative arts, costumes, and musical instruments. The museum is not just a repository of art, but a place of learning, inspiration, 
            and cultural exchange. Its mission is to connect people to creativity, knowledge, and ideas through extraordinary art from around the world.
            
            For more detailed information, visit the <a 
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" 
              target="_blank" 
              rel="noreferrer"
            >
              Wikipedia entry for the Metropolitan Museum of Art
            </a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}