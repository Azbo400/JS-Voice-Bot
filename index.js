//Javascript linked with index.html!
'use-strict';

responsiveVoice.setDefaultVoice("US English Female");


if (annyang) {
  //Commands
  var commands = {
    'hi': function() {
      responsiveVoice.speak("Hi there, may I assist you");
    }
    'What can you do':function(){
      responsiveVoice.speak("Here is a list of things I can respond too");
    }
    'What is the weather like':function(){
      fetch('https://ipinfo.io')
        .then(function(blob){
          return blob.json();
        })
        .then(function(data){
          console.log(data);
        });

    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();

  console.log(annyang);
}
