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

    if (lowerCaseMessage.includes("employer registration")) {
      this.actionProvider.handleemployerRegistrationList();
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
    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.help2();
    }
    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.help3();
    }
    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.help4();
    }
    if (lowerCaseMessage.includes("price")) {
      this.actionProvider.price();
    }
    if (lowerCaseMessage.includes("phone")) {
      this.actionProvider.phone();
    }
    if (lowerCaseMessage.includes("email")) {
      this.actionProvider.email();
    }
    if (lowerCaseMessage.includes("contact")) {
      this.actionProvider.contact();
    }
    if (lowerCaseMessage.includes("bye")) {
      this.actionProvider.bye();
    }
    if (lowerCaseMessage.includes(" ")) {
      this.actionProvider.empty();
    }
    if (lowerCaseMessage.includes("employee registration")) {
      this.actionProvider.handleemployeeRegistrationList();
    }
  }
}

export default MessageParser;
