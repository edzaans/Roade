import React from "react";
import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Employee Registration",
            handler: props.actionProvider.handleEmployeeRegistrationList,
            id: 1,
        },
        {
            text: "Employer Registration",
            handler: props.actionProvider.handleEmployerRegistrationList,
            id: 2
        },
        //{ text: "Prices", handler: () => { }, id: 3 },
        //{ text: "Test1", handler: () => { }, id: 4 },
        //{ text: "Test2", handler: () => { }, id: 5 },

    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
