import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./sign-up-farmer.css";

const SignUpFarmer = () => {
  const navigate = useNavigate();

  const onSignupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="signup-farmer">
      <img className="logo-big-icon1" alt="" src="/logobig@2x.png" />
      <div className="container" id="container" />
      <div className="citizenship-number">Citizenship Number</div>
      <div className="username">Username</div>
      <div className="password">Password</div>
      <div className="confirm-password">Confirm Password</div>
      <b className="sign-up-as">Sign Up As User</b>
      <Form className="citizenship">
        <Form.Control type="text" />
      </Form>
      <Form className="user">
        <Form.Control type="text" />
      </Form>
      <Form className="confirm">
        <Form.Control type="text" />
      </Form>
      <Form className="password1">
        <Form.Control type="text" />
      </Form>
      <Button
        className="signup-button1"
        variant="primary"
        onClick={onSignupButtonClick}
      >{`Sign Up `}</Button>
      <div className="already-have-an-container" onClick={onAlreadyHaveAnClick}>
        <span>Already have an account?</span>
        <b>{` `}</b>
        <i className="log-in">Log in</i>
        <b>{` `}</b>
      </div>
      <img
        className="vector-icon2"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default SignUpFarmer;
