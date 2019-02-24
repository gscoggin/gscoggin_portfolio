import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

  class FooterPagePro extends React.Component {
    render() {
    return (
      <Footer color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="my-4">
            <Col md="4" lg="4">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Gabe Scoggin
              </h5>
              <p>
                I'm a Senior Technical Program Manager and Developer with a passion for technology, art and design. I have years of experience building excellent teams and managing big projects.{" "}
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <ul className="list-unstyled">
                <p>
                  <a href="#!">LINKEDIN</a>
                </p>
                <p>
                  <a href="#!">RESUME</a>
                </p>
                <p>
                  <a href="#!">GITHUB</a>
                </p>
              </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">CONTACT</h5>
              <p>
                <i className="fa fa-phone mr-3" />gabescoggin@gmail.com
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2" lg="2" className="text-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Follow Me
              </h5>
              <div className="mt-2 ">
                <a type="button" className="btn-floating btn-small btn-fb">
                  <i className="fa fa-facebook" />
                </a>
                <a type="button" className="btn-floating btn-small btn-tw">
                  <i className="fa fa-twitter" />
                </a>
              </div>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
          </Row>
        </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.gabescoggin.com"> Gabe Scoggin </a>
        </Container>
      </div>
    </Footer>
    );
  }
}

export default FooterPagePro;