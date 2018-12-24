var write_us_btn = document.querySelector(".contacts-wrapper .btn");
var modal = document.querySelector(".modal-form");
var modal_close = document.querySelector(".modal-close");

var modal_form = document.querySelector(".modal-form form");
var modal_name = document.querySelector(".modal-name [name=name]");
var modal_letter = document.querySelector(".modal-letter [name=letter]");
var modal_email = document.querySelector(".modal-name [name=email]");

var isStorageSupport = true;
var storage = "";

var slide_controls = document.querySelectorAll(".advantages-controls li");
var slide = document.querySelectorAll(".advantages-item");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

write_us_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("display-none");

  if (storage) {
    modal_name.value = storage;
    modal_email.focus();
  } else {
    modal_name.focus();
  }
});

modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("display-none");
  modal.classList.remove("modal-err");
});

modal_form.addEventListener("submit", function (evt) {
  if (!modal_name.value || !modal_email.value || !modal_letter.value){
  evt.preventDefault();
  modal.classList.remove("modal-err");
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add("modal-err");
  } else {
    if (isStorageSupport){
    localStorage.setItem("name", modal_name.value);
    localStorage.setItem("email", modal_email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if ( evt.keyCode === 27){
    evt.preventDefault();
    if (!modal.classList.contains("display-none")){
      modal.classList.add("display-none");
      modal.classList.remove("modal-err");
    }
  }
});


