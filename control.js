
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
function clickHandler() {
    if (document.getElementById("username").value === "haininh@gmail.com" && document.getElementById("password").value === '123'){
      console.log("redirect to chat.html");
      window.location.replace("index.html");
    } else {
      alert('Wrong!');
    }
  }

