import Axios from "axios";
import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

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
      <h3>All job offers are displayed here</h3>
      <Accordion>
        {/* map over  data */}
        {jobs.map((job, key) => {
          return (
            <Accordion.Item eventKey={key}>
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
                      <a href="#">{job.title}</a>
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
    </div>
  );
}

export default Connection;
