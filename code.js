setNumber("secs", 0);
setNumber("millisecs", 0);
onEvent("start", "click", function( ) {
  timedLoop(1000, function() {
    setNumber("secs", getNumber("secs") + 1);
  });
  timedLoop(1, function() {
    setNumber("millisecs", getNumber("millisecs") + 1);
    if (getNumber("millisecs") > 59) {
      setNumber("millisecs", 0);
    }
  });
});
onEvent("stop", "click", function( ) {
  stopTimedLoop();
});
