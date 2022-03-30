import Axios from "axios";
import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

// Import Main Screen
import MainScreen from "../MainScreen";

// Import styles
import "./Connection.css";

// Declare Date to format
const date = new Date();

function Connection() {
  const [jobs, setJobs] = useState([]);

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
      <MainScreen title="All job offers are displayed here">
        <Accordion>
          {/* map over  data */}
          {jobs.map((job, key) => {
            return (
              <Accordion.Item eventKey={key} className="my-2 item-test">
                <Accordion.Header>{job.title}</Accordion.Header>
                <Accordion.Body>
                  <article class="postcard light blue">
                    <a class="postcard__img_link" href="#">
                      <img
                        class="postcard__img"
                        src="https://picsum.photos/1000/1000"
                        alt="Image Title"
                      />
                    </a>
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
                      <ul class="postcard__tagbox">
                        <li class="tag__item">
                          <i class="fas fa-tag mr-2"></i>
                          Email
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
