


function setup() {
  noCanvas();

  // This is all for submitting a new word

  // Word from user
  var wordinput = select('#word');
  // Score from user
  var scoreinput = select('#score');
  var scoreit = select('#submit');

  var readinput = select('#readword');
  var readbutton = select('#read');
  var deleteinput=select('#del');
  var deletebutton=select('#delete');
  var readall=select('#read-All')
  scoreit.mousePressed(submitscore);
  readbutton.mousePressed(readData);
  deletebutton.mousePressed(removeData);
 readall.mousePressed(readallData);
  // Submit the score to the API
  function submitscore() {
    // Make the url
    
    var url = '/add/' + wordinput.value() + '/' + scoreinput.value();
    // Use loadJSON
    loadJSON(url, submitted);
    function submitted(result) {
      // Just look at the reply in the console
      console.log(result);
    }
  
  }
  function readData(){
    var url = '/search/' + readinput.value();
    loadJSON(url, submitted);
    function submitted(result) {
      // Just look at the reply in the console
      console.log(result);
    }
  }
  function readallData(){
    var url = '/all';
    loadJSON(url, submitted);
    function submitted(result) {
      // Just look at the reply in the console
      console.log(result);
    }
  }
  function removeData() {
    var url = '/delete/' + deleteinput.value();
    loadJSON(url, submitted);
    function submitted(result) {
      // Just look at the reply in the console
      console.log(result);
    }
  }

}

