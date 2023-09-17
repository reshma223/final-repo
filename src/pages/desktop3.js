import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./desktop3.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
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
    <div className="govsupport">
      <section className="nav-container" />
      <img className="logo-small-icon6" alt="" src="/logosmall4@2x.png" />
      <div className="gov-container" />
      <h2 className="gov-support6">Gov Support</h2>
      <div className="searchbar">
        <div className="searchbar-child" />
        <div className="search">Search</div>
        <img className="vector-icon5" alt="" src="/vector1.svg" />
      </div>
      <div className="gov-nav">
        <div className="province">Province</div>
        <div className="municiple">Municiple</div>
        <div className="ministry">Ministry</div>
      </div>
      <section className="notice5" />
      <section className="notice4" />
      <section className="notice3" />
      <section className="notice2" />
      <div className="notice1" id="notice">
        <textarea className="notice1-child" />
        <div className="notice11">
          <img className="notice1-item" alt="" src="/profile.svg" />
          <div className="lorem-ipsum-dolor-container3">
            <p className="volutpat-turpis-diam">{`Lorem ipsum dolor sit amet consectetur. Sollicitudin nisi lacus nibh risus netus convallis gravida platea `}</p>
            <p className="volutpat-turpis-diam">
              volutpat. Turpis diam porttitor vitae hendrerit massa vulputate
              lacus fringilla. In purus aliquam venenatis
            </p>
            <p className="volutpat-turpis-diam">.</p>
          </div>
        </div>
        <main className="notice12">
          <div className="notice13">
            <img className="notice1-inner" alt="" src="/profile1.svg" />
            <div className="lorem-ipsum-dolor-container4">
              <p className="volutpat-turpis-diam">{`Lorem ipsum dolor sit amet consectetur. Sollicitudin nisi lacus nibh risus netus convallis gravida platea `}</p>
              <p className="volutpat-turpis-diam">
                volutpat. Turpis diam porttitor vitae hendrerit massa vulputate
                lacus fringilla. In purus aliquam venenatis
              </p>
            </div>
            <div className="notice14">
              <img className="group-icon" alt="" src="/profile2.svg" />
              <div className="lorem-ipsum-dolor-container4">
                <p className="volutpat-turpis-diam">{`Lorem ipsum dolor sit amet consectetur. Sollicitudin nisi lacus nibh risus netus convallis gravida platea `}</p>
                <p className="volutpat-turpis-diam">
                  volutpat. Turpis diam porttitor vitae hendrerit massa
                  vulputate lacus fringilla. In purus aliquam venenatis
                </p>
              </div>
              <div className="notice15">
                <img className="notice1-child1" alt="" src="/profile3.svg" />
                <div className="lorem-ipsum-dolor-container6">
                  <p className="volutpat-turpis-diam">{`Lorem ipsum dolor sit amet consectetur. Sollicitudin nisi lacus nibh risus netus convallis gravida platea `}</p>
                  <p className="volutpat-turpis-diam">
                    volutpat. Turpis diam porttitor vitae hendrerit massa
                    vulputate lacus fringilla. In purus aliquam venenatis
                  </p>
                  <p className="volutpat-turpis-diam">{` `}</p>
                </div>
                <div className="notice16">
                  <img className="notice1-child2" alt="" src="/profile4.svg" />
                  <div className="lorem-ipsum-dolor-container4">
                    <p className="volutpat-turpis-diam">{`Lorem ipsum dolor sit amet consectetur. Sollicitudin nisi lacus nibh risus netus convallis gravida platea `}</p>
                    <p className="volutpat-turpis-diam">
                      volutpat. Turpis diam porttitor vitae hendrerit massa
                      vulputate lacus fringilla. In purus aliquam venenatis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <nav className="nav-item6" id="nav">
        <b className="home7" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition8" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance16" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support7" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us7" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
    </div>
  );
};

export default Desktop3;
