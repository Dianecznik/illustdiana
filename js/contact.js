document.addEventListener("DOMContentLoaded", function () {
  const form = {
    Username: document.querySelector("name"),
    email: document.querySelector("email"),
    subject: document.querySelector("subject"),
    message: document.querySelector("message"),
    
  };

  // form.submit.addEventListener("click", () => {
  //   const request = new XMLHttpRequest();

  //   request.onload = () => {
  //     console.log(request.responseText);
  //   };
  //   request.open('post', 'Nazwa folderu.php');
  // });


const API_URL = ''

const success = (data) => {

 console.log(success);
}
const error = (err) => {
  console.log(err);
}


const req = new XMLHttpRequest();
req.onload = success;
req.onerror = error;

req.open('POST', API_URL);
req.send();

















});
