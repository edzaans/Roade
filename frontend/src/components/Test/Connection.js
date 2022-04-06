import Axios from "axios";
import { useState, useEffect } from "react";
import { Accordion, Badge } from "react-bootstrap";

// Import Main Screen
import MainScreen from "../MainScreen";

// Import styles
import "./Connection.css";

// Import assets
const header = require("../../assets/Images_Custom/img4.png");

// Declare Date to format
const date = new Date();
// Set state for data coming back
function Connection({ search }) {
  const [jobs, setJobs] = useState([]);

  // Create Mail constant to send email to details pulled from Database
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  // Retreives data when page is loaded
  useEffect(() => {
    Axios.get("/connection").then((response) => {
      setJobs(response.data);
      console.log(response);
      console.log("Connection successful");
    });
  }, []);
  return (
    <div className="text-center mx-5">
      <MainScreen
        title={
          <div>
            <h1>job offers</h1>
            <h5 style={{ color: "black", marginTop: "20px" }}>
              View jobs offered or use search bar at the top to search by job
              title
            </h5>
          </div>
        }
      >
        <Accordion>
          {/* map over  data */}
          {jobs
            .filter((filteredJob) =>
              filteredJob.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((job, key) => {
              return (
                <Accordion.Item eventKey={key} className="my-2 item-test">
                  <Accordion.Header>
                    <div className="px-2 card_heading">
                      <h3>
                        {job.company} / {job.title}
                      </h3>{" "}
                      Created on :{" "}
                      <span>{date.toDateString(job.createdAt)}</span>
                    </div>

                    {/*    <div className="mx-2">
                    {" "}
                    <Badge bg="success">{job.category}</Badge>
                  </div> */}
                  </Accordion.Header>
                  <Accordion.Body>
                    <article class="postcard light blue">
                      <img
                        class="postcard__img"
                        src={header}
                        alt="Image Title"
                      />

                      <div class="postcard__text t-dark">
                        <h1 class="postcard__title blue">
                          <span
                            style={{
                              display: "flex",
                              color: "black",
                              textDecoration: "none",
                              flex: 1,
                              cursor: "pointer",
                              alignSelf: "center",
                              fontSize: "1.5 rem",
                              justifyContent: "center",
                            }}
                          >
                            {job.title}
                          </span>
                        </h1>
                        <div className="mx-2">
                          {" "}
                          <Badge bg="success">{job.category}</Badge>
                        </div>
                        <div class="postcard__subtitle small">
                          <time datetime={date.getDate(job.createdAt)}>
                            <i class="fas fa-calendar-alt mr-2"></i>
                            <p>
                              Created on :{" "}
                              <span>{date.toDateString(job.createdAt)}</span>
                            </p>
                          </time>
                        </div>
                        <div class="postcard__bar"></div>
                        <div class="postcard__preview-txt">
                          <p>{job.content}</p>
                        </div>
                        <ul class="postcard__tagbox text-center">
                          <li class="tag__item">
                            {/* Mailing here */}
                            <Mailto email={job.contact} subject={job.title}>
                              Apply here
                            </Mailto>
                          </li>
                          <li class="tag__item ">
                            {/* Mailing here */}
                            {job.contact}
                          </li>
                        </ul>
                      </div>
                    </article>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
        </Accordion>
      </MainScreen>
    </div>
  );
}

export default Connection;
