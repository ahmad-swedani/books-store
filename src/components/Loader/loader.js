import Spinner from "react-bootstrap/Spinner";
import "./style.css";

function Loader() {
  return <Spinner animation="border" variant="info" className="spinnerStyle" />;
}

export default Loader;
