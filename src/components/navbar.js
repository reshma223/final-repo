import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInsuranceTextClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <nav className="navbar5" id="nav-items">
      <div className="navbar6" />
      <nav className="nav-item7" id="nav">
        <b className="home8" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition9">Petition</b>
        <b className="insurance17" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support8" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us8" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <img className="logo-small-icon7" alt="" src="/logosmall2@2x.png" />
    </nav>
  );
};

export default Navbar;
