//initiate
const fullName     = document.getElementById("full-name");
const birthDate    = document.getElementById("birth-date");
const genderMale   = document.getElementById("male");
const genderFemale = document.getElementById("female");
const phone        = document.getElementById("phone");
const email        = document.getElementById("email");
const message      = document.getElementById("message");
const btnSubmit    = document.getElementById("submit");

// const namaKosong = document.getElementById("nama-kosong");
// const tanggalKosong = document.getElementById("tanggal-kosong");
// const jkKosong = document.getElementById("jk-kosong");
// const pesanKosong = document.getElementById("pesan-kosong");

const senderTime    = document.getElementById("sender-time");
const senderName    = document.getElementById("sender-name");
const senderBirth   = document.getElementById("sender-birth-date");
const senderGender  = document.getElementById("sender-gender");
const senderPhone   = document.getElementById("sender-phone");
const senderEmail   = document.getElementById("sender-email");
const senderMessage = document.getElementById("sender-message");

let slideIndex = 0;
showSlides();

// Submit form
btnSubmit.addEventListener("click", function () {

  if (fullName.value !== "" && birthDate.value !== "" && phone.value !== "" && email.value !== "" && message.value !== "") {
    if (genderMale.checked === true || genderFemale.checked === true) {
      senderTime.textContent   = Date();
      senderName.textContent   = fullName.value;
      senderBirth.textContent  = birthDate.value; 
      senderGender.textContent = genderMale.checked === true ? genderMale.value : genderFemale.value;
      senderPhone.textContent  = phone.value;
      senderEmail.textContent  = email.value;
      senderMessage.textContent= message.value;
    }
  }
});

// function submitForm(){
//     const name      = document.forms['message-form']['full-name'].value
//     const birthDate = document.forms['message-form']['birth-date'].value;
//     const gender    = document.forms['message-form']['gender'].value;
//     const messages  = document.forms['message-form']['messages'].value;

//     // if( gender == "" ) {
//     //     alert("Data Jenis Kelamin tidak boleh kosong");
//     //     // return false;
//     // }

//     setSenderUI(name,birthDate,gender, messages);

//     return false;
// }

// function setSenderUI(name, birthDate, gender, messages){
//     document.getElementById("sender-full-name").innerHTML=name;
//     document.getElementById('sender-birth-date').innerHTML=birthDate;
//     document.getElementById('sender-gender').innerHTML=gender;
//     document.getElementById('sender-messages').innerHTML=messages;
// }

// Responsive navbar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

 document.querySelector(".first-name").textContent = "\"UBar\"";
 document.querySelector(".last-name").textContent  = "~ Ulin Bareng";


function showSlides() {
  let slide = document.getElementsByClassName("mySlide");
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) slideIndex = 1;
  slide[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
