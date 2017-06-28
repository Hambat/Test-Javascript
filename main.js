var state = 0,
    input = document.getElementById('inp'),
    stopBtn = document.getElementById('stopBtn'),
    playBtn = document.getElementById('playBtn'),
    decrementBtn = document.getElementById('decrementBtn');

function updateState(state, action) {
  if(action.type === 'INCREMENT') {
    return state + action.amount;
  }
  if(action.type === 'DECREMENT') {
      return state - action.amount;
  }
   else {
    return state;
  }
};

//increment state
var increment = {type: 'INCREMENT', amount: 1};

var intervalFunc = function() {
  state = updateState(state, increment);
  input.value = state;
};

var intervalID = setInterval(intervalFunc, 1000);

//stop state
stopBtn.onclick = function() {
  clearInterval(intervalID);
};

//play state
playBtn.onclick = function() {
  clearInterval(intervalID);
  intervalID = setInterval(intervalFunc, 1000);

  var alma = input.value;
};

//decrement state
var decrement = {type: 'DECREMENT', amount: 1};

var intervalFuncDec = function() {
  state = updateState(state, decrement);
  input.value = state;
};


decrementBtn.onclick = function() {
  clearInterval(intervalID);
  intervalID = setInterval(intervalFuncDec, 1000);
};
