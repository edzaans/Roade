// MessageParser starter code in MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    //employee option
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
      if (lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet2();
      }
     
      if (lowerCaseMessage.includes("help")) {
        this.actionProvider.help();
      }
      if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.contact();
      }
  
      if (lowerCaseMessage.includes("employee registration")) {
        this.actionProvider.handleemployeeRegistrationList();
      }
    }
  
     //employer option
     parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
      if (lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet2();
      }
      if (lowerCaseMessage.includes("help")) {
        this.actionProvider.help();
      }
      if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.contact();
      }
      if (lowerCaseMessage.includes("employer registration")) {
        this.actionProvider.handleemployerRegistrationList();
      }
    }
  }
  
  export default MessageParser;
  