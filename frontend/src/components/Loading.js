import { Spinner } from "react-bootstrap";

function Loading({ size = 100 }) {
  return (
    <div className="text-center mb-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
