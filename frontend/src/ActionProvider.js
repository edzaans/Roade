class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method greet
    greet() {
      const greetingMessage = this.createChatBotMessage("Welcome to Roade.");
      this.updateChatbotState(greetingMessage);
    }
    greet2() {
      const greeting2Message = this.createChatBotMessage("Welcome to Roade.");
      this.updateChatbotState(greeting2Message);
    }
  
    // new method help
    help() {
      const helpMessage = this.createChatBotMessage("For more information contact: sample@email.com or call 0992223456");
      this.updateChatbotState(helpMessage);
    }
  
    // new method contact
    contact() {
      const contactMessage = this.createChatBotMessage("Contact information: adress: sample, contact: sample@email.com or call 0992223456");
      this.updateChatbotState(contactMessage);
    }
   
  // new method empty
  empty() {
    const emptyMessage = this.createChatBotMessage("Sorry, I don't understand. Try: HELP");
    this.updateChatbotState(emptyMessage);
  }
    //employee option
    handleEmployeeRegistrationList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Employee Registration:",
        {
          widget: "employeeRegistrationList",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    //employer option
    handleEmployerRegistrationList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Employer Registration:",
        {
          widget: "employerRegistrationList",
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
  