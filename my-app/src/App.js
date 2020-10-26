import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CardGroup from "react-bootstrap/CardGroup";
import Media from "react-bootstrap/Media";

import "holderjs";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Float</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Link</Nav.Link>
              <Nav.Link href="#pricing" disabled="true">
                Disabled
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={400}
              height={400}
              src="https://picsum.photos/800/400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption style={{ textAlign: "left" }}>
              <h1 align="left">First slide label</h1>
              <h2 align="left">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </h2>
              <Button variant="primary">Sign up Today</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={400}
              height={400}
              src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption style={{ align: "right" }}>
              <h1 align="center">Second slide label</h1>
              <h2 align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <Button variant="primary">Lear More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              width={400}
              height={400}
              src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption style={{ textAlign: "right" }}>
              <h1 align="right">Third slide label</h1>
              <h2 align="right">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </h2>
              <Button variant="primary">Browse Gallery</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Card">
        <CardGroup>
          <Card
            style={{
              margin: 0,
              textAlign: "center",
              border: 0,
              paddingTop: "2%",
            }}
          >
            <Card.Img
              variant="top"
              style={{
                textAnchor: "Middle",
                textAlign: "center",
              }}
            />
            <Image
              src="holder.js/30px140"
              style={{
                alignSelf: "center",
              }}
              roundedCircle
            ></Image>
            <Card.Body>
              <Card.Title align="center" style={{ color: "#5a5a5a" }}>
                <h2>Card title</h2>
              </Card.Title>
              <Card.Text align="center" style={{ color: "#5a5a5a" }}>
                <p style={{ padding: "60px", paddingTop: ".2px" }}>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
              </Card.Text>
              <Button variant="secondary">View More >> </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: 0,
              textAlign: "center",
              border: 0,
              paddingTop: "2%",
            }}
          >
            <Card.Img variant="top" />
            <Image
              style={{
                width: 140,
                height: 140,
                borderRadius: 140 / 2,
                alignSelf: "center",
              }}
              src="holder.js/30px140"
              roundedCircle
            ></Image>
            <Card.Body>
              <Card.Title style={{ color: "#5a5a5a" }}>
                <h2>Card title</h2>
              </Card.Title>
              <Card.Text align="center" style={{ color: "#5a5a5a" }}>
                <p style={{ padding: "60px", paddingTop: ".2px" }}>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
              </Card.Text>
              <Button variant="secondary">View More >> </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: 0,
              textAlign: "center",
              border: 0,
              paddingTop: "2%",
            }}
          >
            <Card.Img variant="top" align-items="center" />
            <Image
              style={{
                width: 140,
                height: 140,
                borderRadius: 140 / 2,
                alignSelf: "center",
              }}
              src="holder.js/30px140"
              roundedCircle
            ></Image>
            <Card.Body>
              <Card.Title align="center" style={{ color: "#5a5a5a" }}>
                <h2>Card title</h2>
              </Card.Title>
              <Card.Text align="center" style={{ color: "#5a5a5a" }}>
                <p style={{ padding: "60px", paddingTop: ".2px" }}>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
              </Card.Text>
              <Button variant="secondary" align="center">
                View More >>{" "}
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div className="Media">
        <Media>
          <Media.Body style={{ paddingTop: "10%", paddingLeft: "10%" }}>
            <h1 style={{ color: "#737373", fontSize: "50px" }}>
              First featurette heading{" "}
              <p style={{ color: "grey" }}>It’ll blow your mind.</p>
            </h1>
            <p style={{ color: "grey", paddingTop: ".1px" }}>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </Media.Body>
          <img
            style={{
              height: 600,
              width: 600,
              paddingRight: "10%",
              paddingTop: "4%",
              paddingBottom: "5%",
            }}
            width={400}
            height={400}
            className="align-self-start mr-3"
            src="holder.js/500x500"
            alt="Generic placeholder"
          />
        </Media>

        <Media>
          <img
            style={{
              height: 600,
              width: 600,
              paddingLeft: "10%",
              paddingTop: "4%",
              paddingBottom: "5%",
            }}
            width={400}
            height={400}
            className="align-self-start mr-3"
            src="holder.js/500x500"
            alt="Generic placeholder"
          />
          <Media.Body
            style={{
              paddingTop: "10%",
              paddingRight: "14%",
              marginBottom: "1rem",
            }}
          >
            <h1 style={{ color: "#737373", fontSize: "50px" }}>
              Oh yeah, it’s that good.
              <p style={{ color: "grey" }}>See for yourself..</p>
            </h1>
            <p style={{ color: "grey", paddingTop: ".1px" }}>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </Media.Body>
        </Media>

        <Media>
          <Media.Body style={{ paddingTop: "10%", paddingLeft: "10%" }}>
            <h1 style={{ color: "#737373", fontSize: "50px" }}>
              And lastly, this one.
              <p style={{ color: "grey" }}>Checkmate.</p>
            </h1>
            <p style={{ color: "grey", paddingTop: ".1px" }}>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </Media.Body>
          <img
            style={{
              height: 600,
              width: 600,
              paddingRight: "10%",
              paddingTop: "4%",
              paddingBottom: "8%",
            }}
            width={400}
            height={400}
            className="align-self-start mr-3"
            src="holder.js/500x500"
            alt="Generic placeholder"
          />
        </Media>
      </div>
      <div className="Footer">
        <p style={{ paddingLeft: "9%" }}>
          © 2017-2020 Company, Inc. <a href="#">Privacy</a>.
          <a href="#">Terms</a>{" "}
          <a style={{ paddingLeft: "60%" }} href="#">
            {" "}
            Back to Top
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
