class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method greet
  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hello. For more type HELP."
    );
    this.updateChatbotState(greetingMessage);
  }
  greet2() {
    const greeting2Message = this.createChatBotMessage(
      "Hi. For more type HELP."
    );
    this.updateChatbotState(greeting2Message);
  }

  // new method help
  help() {
    const helpMessage = this.createChatBotMessage(
      "Type CONTACT for contact info."
    );
    this.updateChatbotState(helpMessage);
  }
  // new method help
  help2() {
    const helpMessage = this.createChatBotMessage("Type PRICE for prices.");
    this.updateChatbotState(helpMessage);
  }
  // new method help
  help3() {
    const helpMessage = this.createChatBotMessage(
      "Type EMAIL for email address."
    );
    this.updateChatbotState(helpMessage);
  }
  help4() {
    const helpMessage = this.createChatBotMessage(
      "Type PHONE for phone number."
    );
    this.updateChatbotState(helpMessage);
  }
  // new method help
  price() {
    const priceMessage = this.createChatBotMessage(
      "Roade adapts PAY PER CLICK model based entirely on the clicks that are made in the job add placed by employer. The amount ranging from a few cents to a few euro, but only when the user clicks. For more information contact our sales team: email: sales@roade.com or call 09933445566 "
    );
    this.updateChatbotState(priceMessage);
  }
  // new method help
  phone() {
    const phoneMessage = this.createChatBotMessage("Call: 0992223456");
    this.updateChatbotState(phoneMessage);
  }
  // new method help
  email() {
    const emailMessage = this.createChatBotMessage("Email: info@roade.com");
    this.updateChatbotState(emailMessage);
  }
  // new method help
  bye() {
    const byeMessage = this.createChatBotMessage(
      "Thank you for visiting ROADE. Bye!"
    );
    this.updateChatbotState(byeMessage);
  }

  // new method contact
  contact() {
    const contactMessage = this.createChatBotMessage(
      "Contact: info@roade.com or call 0992223456"
    );
    this.updateChatbotState(contactMessage);
  }

  // new method empty
  /*   empty() {
    const emptyMessage = this.createChatBotMessage(
      "Sorry, I don't understand. Try: HELP"
    );
    this.updateChatbotState(emptyMessage);
  } */
  //employee option
  handleEmployeeRegistrationList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Employee Registration:",
      {
        widget: "employerRegistrationList",
      }
    );

    this.updateChatbotState(message);
  };

  //employer option
  handleEmployerRegistrationList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Employer Registration:",
      {
        widget: "employeeRegistrationList",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
