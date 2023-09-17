import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./desktop7.css";

const Desktop7 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onInsuranceTextClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  return (
    <div className="contact1">
      <section className="navbar3" id="navbar" />
      <img className="logo-small-icon4" alt="" src="/logosmall1@2x.png" />
      <nav className="nav-item4" id="nav-item">
        <b className="home5" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition4" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance14" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support4" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us4">Contact Us</b>
      </nav>
      <h1 className="contact-us5">Contact Us</h1>
      <div className="container4" />
      <div className="submit-button1">
        <Button className="submit-button2" variant="primary" >
        Submit</Button>
      </div>
      <div className="subject">
        <Form className="wrapper">
          <Form.Control type="text" />
        </Form>
        <h3 className="email-address">Subject</h3>
      </div>
      <div className="name">
        <Form className="wrapper">
          <Form.Control type="text" />
        </Form>
        <h3 className="full-name"> Full Name</h3>
      </div>
      <div className="message">
        <Form.Group className="rectangle-formgroup">
          <Form.Control as="textarea" defaultValue="" />
        </Form.Group>
        <h3 className="your-message">Your Message</h3>
      </div>
      <div className="email">
        <Form className="wrapper">
          <Form.Control type="text" />
        </Form>
        <h3 className="email-address">Email address</h3>
      </div>
      
    </div>

  );
};

export default Desktop7;
