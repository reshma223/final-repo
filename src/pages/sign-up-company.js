import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./sign-up-company.css";

const SignUpCompany = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="signup-company">
      <img className="logo-big-icon2" alt="" src="/logobig@2x.png" />
      <div className="container1" id="container" />
      <div className="pan-number">Pan Number</div>
      <div className="organization">Organization</div>
      <div className="password2">Password</div>
      <div className="confirm-password1">Confirm Password</div>
      <b className="sign-up-as1">Sign Up As Company</b>
      <Form className="citizenship1">
        <Form.Control type="text" />
      </Form>
      <Form className="user1">
        <Form.Control type="text" />
      </Form>
      <Form className="confirm1">
        <Form.Control type="text" />
      </Form>
      <Form className="password3">
        <Form.Control type="text" />
      </Form>
      <div
        className="already-have-an-container1"
        onClick={onAlreadyHaveAnClick}
      >
        <span>Already have an account?</span>
        <b>{` `}</b>
        <i className="log-in1">Log in</i>
        <b>{` `}</b>
      </div>
      <Button
        className="signup-button2"
        variant="primary"
        onClick={onSignupButtonClick}
      >{`Sign Up `}</Button>
      <img
        className="vector-icon3"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default SignUpCompany;
