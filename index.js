//Javascript linked with index.html!
'use-strict';
function testher(text){

  if (text === "hi"){
    responsiveVoice.setDefaultVoice("US English Female");
    responsiveVoice.speak("Hello there, How may I assist you today?");
  }
}

if (annyang) {
  //Commands
  var commands = {
    'hi': function() {
      responsiveVoice.speak("Hi there, how are you?");
      console.log('The boy said hi!!!!!!!!!!!!');
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();

  console.log(annyang);
}
