import { Alert } from "react-bootstrap";

function ErrorMessage({ variant = "danger", children }) {
  return (
    <div>
      <Alert className="text-center" variant={variant}>
        <strong>{children}</strong>
      </Alert>
    </div>
  );
}

export default ErrorMessage;
