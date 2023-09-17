import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./desktop4.css";

const Desktop4 = () => {
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

  return (
    <div className="claim-calculation">
      <section className="navbar4" id="nav-bar" />
      <img className="logo-small-icon5" alt="" src="/logosmall3@2x.png" />
      <h1 className="nepal-insurance3">Nepal Insurance</h1>
      <nav className="nav-item5" id="nav">
        <b className="home6" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition7" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance15" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support5" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us6" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <img className="vector-icon4" alt="" src="/vector.svg" />
      <img className="claim-calculation-child" alt="" src="/rectangle-31.svg" />
      <b className="of-sum-insured">50% of sum insured</b>
      <b className="livestock4">Livestock</b>
      <b className="claim-calculator">Claim Calculator</b>
      <section className="rating7">
        <div className="rating-child6" />
        <b className="major-injury">Major Injury</b>
        <b className="minor-injury">{`Minor Injury `}</b>
        <b className="death">Death:</b>
      </section>
      <div className="input-text">
        <div className="input-text-child" />
        <b className="of-sum-insured1">90% of sum insured</b>
      </div>
      <div className="input-text2">
        <div className="input-text-child" />
        <b className="of-sum-insured2">50% of sum insured</b>
      </div>
      <input
        className="input-text3"
        placeholder="40% of sum insured"
        type="text"
      />
      <button className="claim-button">
        <div className="claim-button-child" />
        <b className="calculator-claim"> Calculator Claim</b>
      </button>
    </div>
  );
};

export default Desktop4;
