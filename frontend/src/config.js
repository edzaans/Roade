import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Roade",
  initialMessages: [
    createChatBotMessage(
      "Welcome to Roade! Select option below or type HELP for more...",
      {
        widget: "learningOptions",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f7c40c",
    },
    chatButton: {
      backgroundColor: "#ffffff00",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    //employee widget
    {
      widgetName: "employerRegistrationList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Video",

            url: "http://localhost:3000/tutorial",
            id: 1,
          },
          {
            text: "Instructions",
            url: "http://localhost:3000/tutorialtext",
            id: 2,
          },
          {
            text: "FAQ",
            url: "http://localhost:3000/faq",
            id: 3,
          },
        ],
      },
    }, //end employee widget

    //employer widget
    {
      widgetName: "employeeRegistrationList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Video",
            url: "http://localhost:3000/tutorial",
            id: 1,
          },
          {
            text: "Instructions",
            url: "http://localhost:3000/tutorialtext",
            id: 2,
          },
          {
            text: "FAQ",
            url: "http://localhost:3000/faq",
            id: 3,
          },
        ],
      },
    }, //end employer widget
  ],
};

export default config;
