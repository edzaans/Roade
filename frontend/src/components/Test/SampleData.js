import React from "react";
import { Accordion } from "react-bootstrap";

export function SampleData() {
  const testPost = [
    {
      _id: "1",
      name: "Amazon",
      phone: 123456789,
      title: "Full time driver",
      content:
        "We're expanding our Team and have several vacancies for Delivery Drivers, Wholesale & Vending Machine Merchandisers for Saturday and Sundays only. We have 10hr and 8hr shifts available along with flexible start times.To apply you must have a Full B Driving Licence, excellent customer service and time management skills along with the motivation to get the job done well.You will be work weekends with guaranteed hours. You will receive full training (an induction followed by on the job training) along with Manual Handling and Covid-19 compliance training. You will receive a full uniform and PPE.",
      category: "Full Time",
    },
    {
      _id: "2",
      name: "Amazon",
      phone: 123456789,
      title: "Part time driver needed",
      content:
        "We're expanding our Team and have several vacancies for Delivery Drivers, Wholesale & Vending Machine Merchandisers for Saturday and Sundays only. We have 10hr and 8hr shifts available along with flexible start times.To apply you must have a Full B Driving Licence, excellent customer service and time management skills along with the motivation to get the job done well.You will be work weekends with guaranteed hours. You will receive full training (an induction followed by on the job training) along with Manual Handling and Covid-19 compliance training. You will receive a full uniform and PPE.",
      category: "Part time",
    },
    {
      _id: "3",
      name: "Amazon",
      phone: 123456789,
      title: "Watched some Anime",
      content: "Finished 2 seasons of Attack on Titan and My Hero academia.",
      category: "Entertainment",
    },
    {
      _id: 4,
      name: "Amazon",
      phone: 123456789,
      title: "Started React JS",
      content:
        "Made my first App in React JS, feels awesome to learn something new. I aim to be a full stack dev someday",
      category: "Learning",
    },
  ];

  // For testing purposes only
  testPost.map((element, key) => {
    // Check data type
    console.log(element.title, key, typeof key);
  });

  return (
    <div className="text-center mx-5">
      <h3>All job offers are displayed here</h3>
      <Accordion>
        {/* map over test data */}
        {testPost.map((element, key) => {
          return (
            <Accordion.Item eventKey={key}>
              <Accordion.Header>
                {element.name} / {element.title}
              </Accordion.Header>
              <Accordion.Body>
                {element.content}
                <hr></hr>
                <p className="mt-3">Contact details - {element.phone}</p>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
