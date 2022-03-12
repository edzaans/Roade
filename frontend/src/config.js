import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Roade",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to know?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#f7c40c",
    },
    chatButton: {
      backgroundColor: "#ffffff",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    //employee widget
    {
      widgetName: "employeeRegistrationList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Instruction on How to Register as an Employee",
           
            url:
              "https://pixabay.com/photos/registration-log-in-keyboard-hand-3938434/",
           id: 1,
          },
          {
            text: "Test title",
            url:
              "https://pixabay.com/photos/board-school-university-to-learn-2450236/",
            id: 2,
          },
          {
            text: "Test Title2",
            url: "https://pixabay.com/photos/question-question-mark-opinion-poll-2736480/",
            id: 3,
          },
        ],
      },
    },//end employee widget

    //employer widget
    {
      widgetName: "employerRegistrationList",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Instruction on How to Register as an Employer",
            url:
              "https://pixabay.com/photos/registration-log-in-keyboard-hand-3938434/",
            id: 1,
          },
          {
            text: "Test title",
            url:
              "https://pixabay.com/photos/board-school-university-to-learn-2450236/",
            id: 2,
          },
          {
            text: "Test Title2",
            url: "https://pixabay.com/photos/question-question-mark-opinion-poll-2736480/",
            id: 3,
          },
        ],
      },
    },//end employer widget
  ],
};

export default config;
