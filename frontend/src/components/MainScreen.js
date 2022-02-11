import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

function MainScreen({ title, children }) {
  return (
    <div className="main-back">
      <Container>
        <Row>
          <div className="page">
            {/* Render children ONLY if there is a title */}
            {title && (
              <>
                <h3 className="heading text-center">{title}</h3>
                <hr></hr>
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
