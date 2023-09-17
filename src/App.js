import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop2 from "./pages/desktop2";
import NepalInsurance from "./pages/nepal-insurance";
import CostCalculation from "./pages/cost-calculation";
import Submitted from "./pages/submitted";
import Insurance from "./pages/insurance";
import SignUpFarmer from "./pages/sign-up-farmer";
import SignUpCompany from "./pages/sign-up-company";
import Desktop9 from "./pages/desktop9";
import Desktop8 from "./pages/desktop8";
import Desktop7 from "./pages/desktop7";
import Desktop5 from "./pages/desktop5";
import Desktop4 from "./pages/desktop4";
import Desktop3 from "./pages/desktop3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/nepalinsurance":
        title = "";
        metaDescription = "";
        break;
      case "/costcalculation":
        title = "";
        metaDescription = "";
        break;
      case "/submitted":
        title = "";
        metaDescription = "";
        break;
      case "/insurance":
        title = "";
        metaDescription = "";
        break;
      case "/signupfarmer":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/petition":
        title = "";
        metaDescription = "";
        break;
      case "/claimcalculation":
        title = "";
        metaDescription = "";
        break;
      case "/govsupport":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop2 />} />
      <Route path="/nepalinsurance" element={<NepalInsurance />} />
      <Route path="/costcalculation" element={<CostCalculation />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/signupfarmer" element={<SignUpFarmer />} />
      <Route path="/home" element={<SignUpCompany />} />
      <Route path="/signup" element={<Desktop9 />} />
      <Route path="/login" element={<Desktop8 />} />
      <Route path="/contact" element={<Desktop7 />} />
      <Route path="/petition" element={<Desktop5 />} />
      <Route path="/claimcalculation" element={<Desktop4 />} />
      <Route path="/govsupport" element={<Desktop3 />} />
    </Routes>
  );
}
export default App;
