import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <div>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title text-center">
              <h1>Frequently Asked Questions</h1>
              <span></span>
              <p>Our Frequently Asked Questions are here.</p>
            </div>
          </div>
        </div>

        <Accordion className="faq-accordion">
          <Accordion.Body className="faq-accordion-body test">
            This is used for border in item #1 - do not remove!!!
          </Accordion.Body>
          <Accordion.Item className="faq-accordion-item" eventKey="0">
            <Accordion.Header className="faq-accordion-header">
              What is ROADE?
            </Accordion.Header>
            <Accordion.Body className="faq-accordion-body">
              <p>
                Roade is a website for the transport and logistics industry
                allowing companies connect with skilled drivers and for drivers
                to find suitable job offers either short term or long term.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="faq-accordion-item" eventKey="1">
            <Accordion.Header>How do I register?</Accordion.Header>
            <Accordion.Body className="faq-accordion-body">
              <p>
                {" "}
                To register you will need your company name (if you are
                employer), your personal details and your contact details.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="faq-accordion-item" eventKey="2">
            <Accordion.Header>How much does it cost?</Accordion.Header>
            <Accordion.Body className="faq-accordion-body">
              <p>
                {" "}
                Registration is free. If you are employee looking for job,
                service is free. If you are employer looking for skilled
                drivers, Roade adapts PAY PER CLICK model based entirely on the
                clicks that are made in the job add placed by employer. The
                amount ranging from a few cents to a few euro, but only when the
                user clicks. For more information contact our sales team: email:
                sales@roade.com or call 09933445566.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="faq-accordion-item" eventKey="3">
            <Accordion.Header>How do we collect your data?</Accordion.Header>
            <Accordion.Body className="faq-accordion-body">
              Roade collects data and process data when you:
              <ul>
                <li>Register online</li>
                <li>
                  Voluntarily complete a customer survey or provide feedback via
                  email.
                </li>
                <li>Use or view our website via your browser’s cookies.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="faq-accordion-item" eventKey="4">
            <Accordion.Header>How will we use your data?</Accordion.Header>
            <Accordion.Body className="faq-accordion-body">
              Roade collects your data so that we can:
              <ul>
                <li>Manage your account.</li>
                <li>
                  Email you with special offers on other products and services
                  we think you might like.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="faq-accordion-item" eventKey="5">
            <Accordion.Header>How do we store your data?</Accordion.Header>
            <Accordion.Body className="faq-accordion-body">
              <p>
                {" "}
                Roade securely stores your data for 24 months. Once this time
                period has expired, we will delete your data. Roade will not
                sell your data to third parties.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              What are your data protection rights?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                {" "}
                <ul>
                  <li>
                    <strong>The right to access</strong> – You have the right to
                    request Our Company for copies of your personal data.
                  </li>
                  <li>
                    <strong>The right to rectification </strong>– You have the
                    right to request that Our Company correct any information
                    you believe is inaccurate. You also have the right to
                    request Our Company to complete the information you believe
                    is incomplete.
                  </li>
                  <li>
                    <strong>The right to erasure </strong>– You have the right
                    to request that Our Company erase your personal data, under
                    certain conditions.
                  </li>
                  <li>
                    <strong>The right to restrict processing </strong>– You have
                    the right to request that Our Company restrict the
                    processing of your personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to object to processing </strong>– You
                    have the right to object to Our Company’s processing of your
                    personal data, under certain conditions.
                  </li>
                  <li>
                    <strong>The right to data portability </strong>– You have
                    the right to request that Our Company transfer the data that
                    we have collected to another organization, or directly to
                    you, under certain conditions.
                  </li>
                </ul>
              </p>
              Roade would like to make sure you are fully aware of all of your
              data protection rights. Every user is entitled to the following:
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Body className="faq-accordion-body">
            This is used for border in item #1 - do not remove!!!
          </Accordion.Body>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
