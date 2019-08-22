// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("div#modal");
const errorModalMessage = document.querySelector("p#modal-message");
let likeButtons = document.getElementsByClassName("like");


function likePost() {
  for(let i = 0; i < likeButtons.length; i++) {
    let heart = likeButtons[i].getElementsByClassName("like-glyph")[0];
  
    heart.addEventListener("click", event => {
      mimicServerCall()
        .then(response => {
          if (event.target.innerHTML == EMPTY_HEART) {
            event.target.innerHTML = FULL_HEART;
            event.target.classList.add("activated-heart");
          } else {
            event.target.innerHTML = EMPTY_HEART;
            event.target.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          errorModalMessage.innerHTML = `${error.message}`;
          errorModal.classList.remove("hidden");

          setTimeout(function {
            errorModal.classList.add("hidden");
          }, 5000)
        })
    })
  }
}

likePost();

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
