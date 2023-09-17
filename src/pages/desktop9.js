import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./desktop9.css";

const Desktop9 = () => {
  const navigate = useNavigate();

  const onSignupButtonUserClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignupButtonCompanyClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="signup">
      <img className="logo-big-icon3" alt="" src="/logobig@2x.png" />
      <div className="container2" id="container" />
      <h1 className="sign-up">{`Sign Up `}</h1>
      <Button
        className="signup-button-user"
        variant="primary"
        onClick={onSignupButtonUserClick}
      >{`Sign Up `}</Button>
      <Button
        className="signup-button-company"
        variant="primary"
        onClick={onSignupButtonCompanyClick}
      >{`Sign Up `}</Button>
      <div
        className="already-have-an-container2"
        onClick={onAlreadyHaveAnClick}
      >
        <span>Already have an account?</span>
        <b>{` `}</b>
        <i className="log-in2">Log in</i>
        <b>{` `}</b>
      </div>
    </div>
  );
};

export default Desktop9;
