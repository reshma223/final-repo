import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./nepal-insurance.css";

const NepalInsurance = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onInsuranceTextClick = useCallback(() => {
    navigate("/nepalinsurance");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onSubmitButtonContainerClick = useCallback(() => {
    navigate("/submitted");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/costcalculation");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/claimcalculation");
  }, [navigate]);

  return (
    <div className="nepal-insurance">
      <section className="navbar" id="nav-bar" />
      <img className="logo-small-icon1" alt="" src="/logosmall3@2x.png" />
      <b className="nepal-insurance1">Nepal Insurance</b>
      <nav className="nav-item1" id="nav">
        <b className="home2" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition1" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance1" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support1" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us1" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <div className="rating">
        <div className="rating-child" />
        <b className="schemes">Schemes</b>
      </div>
      <div className="rating1">
        <div className="rating-child" />
        <b className="schemes">Rating</b>
        <img className="rating-inner" alt="" src="/star-1.svg" />
        <img className="star-icon" alt="" src="/star-1.svg" />
        <img className="rating-child1" alt="" src="/star-1.svg" />
        <img className="rating-child2" alt="" src="/star-1.svg" />
      </div>
      <div className="rating3">
        <div className="rectangle-div" />
        <b className="guidance">Guidance</b>
        <div className="rating4">
          <div className="rating-child" />
          <b className="legal-contract">Legal Contract</b>
          <div className="rating5">
            <div className="rating-child" />
            <b className="contact">Contact</b>
            <div
              className="submit-button"
              onClick={onSubmitButtonContainerClick}
            >
              <div className="button-container" />
              <b className="text-submit">Submit Proposal</b>
            </div>
          </div>
        </div>
      </div>
      <div className="lorem-ipsum-dolor-container">
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Neque mattis amet
        </p>
        <p className="lorem-ipsum-dolor">
          molestie sollicitudin. Potenti malesuada augue magna magna.
        </p>
      </div>
      <div className="lorem-ipsum-dolor-container1">
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Neque mattis amet
        </p>
        <p className="lorem-ipsum-dolor">
          molestie sollicitudin. Potenti malesuada augue magna magna.
        </p>
      </div>
      <div className="lorem-ipsum-dolor-container2">
        <p className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. Neque mattis amet
        </p>
        <p className="lorem-ipsum-dolor">
          molestie sollicitudin. Potenti malesuada augue magna magna.
        </p>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="nepal-insurance-child" onClick={onRectangle5Click} />
      <div className="nepal-insurance-item" />
      <b className="livestock">Livestock</b>
      <b className="crop">Crop</b>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <b className="claim">Claim</b>
      </div>
    </div>
  );
};

export default NepalInsurance;
