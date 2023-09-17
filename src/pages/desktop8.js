import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./desktop8.css";

const Desktop8 = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="login">
      <img className="logo-big-icon4" alt="" src="/logobig1@2x.png" />
      <div className="container3" />
      <div className="usernameemail">Username/Email</div>
      <div className="password4">Password</div>
      <b className="log-in3">Log In</b>
      <Form className="user-name">
        <Form.Control type="text" />
      </Form>
      <Form className="password5">
        <Form.Control type="text" />
      </Form>
      <Button
        className="login-button1"
        variant="primary"
        onClick={onLoginButtonClick}
      >{`Log in `}</Button>
      <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
        <span>Don’t have an account?</span>
        <b>{` `}</b>
        <i className="sign-up1">Sign Up</i>
        <b>{` `}</b>
      </div>
    </div>
  );
};

export default Desktop8;
