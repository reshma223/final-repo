import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Navbar from "../components/navbar";
import "./desktop5.css";

const Desktop5 = () => {
  return (
    <div className="petition5">
      <Navbar />
      <h1 className="petition6">Petition</h1>
      <div className="container5" />
      <div className="fullname">
        <Form className="wrapper1">
          <Form.Control type="text" />
        </Form>
        <h3 className="full-name1"> Full Name</h3>
      </div>
      <div className="explain-issue">
        <Form.Group className="wrapper2">
          <Form.Control as="textarea" defaultValue="" />
        </Form.Group>
        <h3 className="explain-issue1">Explain Issue</h3>
      </div>
      <div className="issue">
        <Form className="wrapper1">
          <Form.Control type="text" />
        </Form>
        <h3 className="issue1">Issue</h3>
      </div>
      <div className="ciitizen-number">
        <Form className="wrapper1">
          <Form.Control type="text" />
        </Form>
        <h3 className="citizenship-number1">Citizenship Number</h3>
      </div>
      <button className="submit-button3">
        
        <Button className="submit1" variant="primary">
          Submit
        </Button>
      </button>
    </div>
  );
};

export default Desktop5;
