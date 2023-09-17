import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./submitted.css";

const Submitted = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/nepalinsurance");
  }, [navigate]);

  return (
    <div className="submitted">
      <img className="logo-big-icon" alt="" src="/logobig@2x.png" />
      <img className="submitted-child" alt="" src="/rectangle-29.svg" />
      <b className="proposal-submitted">Proposal Submitted</b>
      <img
        className="vector-icon1"
        alt=""
        src="/vector2.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default Submitted;
