const email = document.querySelector("#email");
const msg1 = document.querySelector(".message1");
const msg2 = document.querySelector(".message2");
const pass = document.querySelector("#password");
const success = document.querySelector(".success");
const submit = document.querySelector("#submit");
let valemail = false;
let valpass = false;
let canSubmit = false;

email.addEventListener("change", validEmail);

function validEmail() {
  let val = email.value;
  let regex = /^[a-zA-Z0-9.%_+-]{3,}@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;

  if (regex.test(val)) {
    msg1.innerHTML = "";
    valemail = true;
  } else {
    msg1.innerHTML = `Make sure email has more than 3 characters and has @ and a .`;
    valemail = false;
  }

  if (valemail && valpass) {
    success.innerHTML = `All good to go!!`;
    success.style.color = "green";
    canSubmit = true;
  } else {
    success.innerHTML = "";
    canSubmit = false;
  }
}

pass.addEventListener("change", validPass);

function validPass() {
  let val_pass = pass.value;
  let pass_regex = /^[a-zA-Z0-9+%_-]{9,}$/;

  if (pass_regex.test(val_pass)) {
    msg2.innerHTML = "";
    valpass = true;
  } else {
    msg2.innerHTML = `Make sure password is more than 8 characters`;
    valpass = false;
  }

  if (valemail && valpass) {
    success.innerHTML = `All good to go`;
    success.style.color = "green";
    canSubmit = true;
  } else {
    success.innerHTML = "";
    canSubmit = false;
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!canSubmit) return;

  if (confirm("Are you sure you want to Submit?")) {
    alert("successful signup!");
  }

  document.querySelector("form").reset();
  validEmail();
  validPass();
});
