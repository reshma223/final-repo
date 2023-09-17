import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./cost-calculation.css";

const CostCalculation = () => {
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
    <div className="cost-calculation">
      <section className="navbar1" id="nav-bar" />
      <img className="logo-small-icon2" alt="" src="/logosmall3@2x.png" />
      <h1 className="nepal-insurance2">Nepal Insurance</h1>
      <nav className="nav-item2" id="nav">
        <b className="home3" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition2" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance2" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support2" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us2" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <section className="rating6">
        <div className="rating-child5" />
        <b className="number-of-livestock">Number of Livestock :</b>
        <b className="sum-insured">{`Sum Insured `}</b>
        <b className="plan-name">Plan Name :</b>
        <b className="amount-need-to">Amount Need To Pay</b>
      </section>
      <button className="livestock1">
        <div className="livestock-child" />
        <b className="livestock2">Livestock</b>
      </button>
      <iframe className="cost-calculation-child" />
      <textarea className="cost-calculation-item" />
      <b className="livestock3">Livestock</b>
      <b className="b">2</b>
      <textarea className="cost-calculation-inner" />
      <textarea className="rectangle-textarea" />
      <b className="of-80000">5% of 80000</b>
      <b className="b1">80,000</b>
      <div className="cost-calculation-child1" />
      <b className="calculate">Calculate</b>
      <div className="cost-calculation-child2" />
      <b className="calculated-cost-4000">Calculated Cost: 4,000</b>
    </div>
  );
};

export default CostCalculation;
