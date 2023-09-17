import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./insurance.css";

const Insurance = () => {
  const navigate = useNavigate();

  const onCompany1ContainerClick = useCallback(() => {
    navigate("/nepalinsurance");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onInsuranceText9Click = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="insurance3">
      <section className="navbar2" id="nav-bar" />
      <img className="logo-small-icon3" alt="" src="/logosmall3@2x.png" />
      <section className="insurance-container" id="insurance-container">
        <div className="company1" onClick={onCompany1ContainerClick}>
          <img
            className="company1-child"
            id="comapany1"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <b className="insurance4">Insurance</b>
        </div>
        <div className="company7">
          <b className="insurance5">Insurance</b>
          <img
            className="company1-child"
            id="company7"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
        <div className="company6">
          <img
            className="company1-child"
            id="company6"
            alt=""
            src="/rectangle-11@2x.png"
          />
          <b className="insurance6">Insurance</b>
        </div>
        <div className="company5">
          <img
            className="company1-child"
            id="company5"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <b className="insurance4">Insurance</b>
        </div>
        <div className="company4">
          <b className="insurance5">Insurance</b>
          <img
            className="company1-child"
            id="company4"
            alt=""
            src="/rectangle-11@2x.png"
          />
        </div>
        <div className="compan3">
          <img
            className="company1-child"
            id="company3"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <b className="insurance5">Insurance</b>
        </div>
        <div className="company8">
          <b className="insurance10">Insurance</b>
          <img
            className="company1-child"
            id="company8"
            alt=""
            src="/rectangle-14@2x.png"
          />
        </div>
        <div className="company2">
          <b className="insurance11">Insurance</b>
          <img
            className="company1-child"
            id="company2"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
      </section>
      <b className="insurance12">Insurance</b>
      <nav className="nav-item3" id="nav">
        <b className="home4" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition3" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance13" onClick={onInsuranceText9Click}>
          Insurance
        </b>
        <b className="gov-support3" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us3" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
    </div>
  );
};

export default Insurance;
