responsiveVoice.setDefaultVoice("US English Female");

function weather(){
  console.log("works");
}


if (annyang) {
  //Commands
  var commands = {
    'hi': function() {
      responsiveVoice.speak("Hi there, may I assist you");
    }
  };
}

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();

  console.log(annyang);
}
