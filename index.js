responsiveVoice.setDefaultVoice("US English Female");

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'hi': function() {
      responsiveVoice.speak("Hello there, How may I assist you?");
      console.log("He said hi");
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
console.log("works");
