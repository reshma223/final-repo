import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onInsuranceTextClick = useCallback(() => {
    navigate("/claimcalculation");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="home">
      <section className="nav-bar" id="nav-bar" navbar />
      <img className="logo-small-icon" alt="" src="/logosmall@2x.png" />
      <img
        className="farmer-1-icon"
        id="farmer"
        alt=""
        src="/farmer-1@2x.png"
      />
      <h1 className="agro-solution" id="heading">
        AGRO SOLUTION
      </h1>
      <div className="agro-container" id="container" />
      <p className="we-are-a-container" id="paragraph">
        <span className="content">We are a service based company</span>
        <span className="ontent"> empowering farmers through the</span>
        <span className="ontent">insurance service and in listing down</span>
        <span className="ontent">{`the government incentive. `}</span>
      </p>
      <Button
        className="login-button"
        variant="primary"
        onClick={onLoginButtonClick}
      >{`Log in `}</Button>
      <MuiButton
        className="signup-button"
        sx={{ width: 176 }}
        
        variant="contained"
        onClick={onSignUpButtonClick}
      >
        Sign Up
      </MuiButton>
      <nav className="nav-item" id="nav-home">
        <b className="home1" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
    </div>
  );
};

export default Desktop2;
