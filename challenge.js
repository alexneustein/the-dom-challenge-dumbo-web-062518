let counting = true;

const counter = document.getElementById('counter')
const btMinus = document.getElementById('-')
const btPlus = document.getElementById('+')
const btHeart = document.getElementById('<3')
const btPlayPause = document.getElementById('pause')
const likesList = document.querySelector('.likes')
let currentNumber = parseInt(counter.innerText);
const likesHash = {};
const commentButton = document.getElementById('submit')
const commentInput = document.getElementById('comment-input')


window.setInterval(function () {
  if (counting) {currentNumber++;
  counter.innerText = currentNumber;}
},1000);

function addOne() {
  currentNumber++;
  counter.innerText = currentNumber;
}

function subtractOne() {
  currentNumber--;
  counter.innerText = currentNumber;
}

function addLike() {
  if (likesHash[currentNumber] === undefined) {
    likesHash[currentNumber] = 1
  } else {
    likesHash[currentNumber]++
  }
  let report = `${currentNumber} liked ${likesHash[currentNumber]} times!`
  const li = document.createElement('li');
  li.append(report);
  likesList.append(li)
}

function playPause() {
  if (counting) {
    counting = false;
    btMinus.disabled=true;
    btPlus.disabled=true;
    btHeart.disabled=true;
    btPlayPause.innerText="resume";
  } else {
    counting = true;
    btMinus.disabled=false;
    btPlus.disabled=false;
    btHeart.disabled=false;
    btPlayPause.innerText="pause";
  }
}

function addComment() {
  const commentsList = document.getElementById('comments')
  const li = document.createElement('li');
  li.append(commentInput.value);
  commentsList.append(li)
  event.preventDefault();
}

btPlus.addEventListener('click', () => {addOne()}, false);
btMinus.addEventListener('click', () => {subtractOne()}, false);
btPlayPause.addEventListener('click', () => {playPause()}, false);
btHeart.addEventListener('click', () => {addLike()}, false);
commentButton.addEventListener('click', () => {addComment()}, false);
