// show/hide password
const passwordFields = document.querySelectorAll('input[type="password"]');

passwordFields.forEach(function (field) {
  field.addEventListener("dblclick", function () {
    
    if (field.type === "password") {
      field.type = "text";
    } else {
      field.type = "password";
    }
  });
});


// empty field
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    const inputs = form.querySelectorAll("input[required]");

    for (let input of inputs) {
      if (input.value.trim() === "") {
        e.preventDefault();                 
        alert("Please fill all required fields.");
        input.focus();
        return;
      }
    }


    const pageName = document.title.includes("Login") ? "logged in" : "signed up";
    alert("You have successfully " + pageName + "!");
  });
}
