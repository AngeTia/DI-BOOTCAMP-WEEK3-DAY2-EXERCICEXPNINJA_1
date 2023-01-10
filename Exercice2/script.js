let form = document.createElement("form");
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Entrer une adresse electronique";
let btn = document.createElement("button");
btn.innerHTML = "Soumettre";

form.appendChild(input);
form.appendChild(btn);
document.body.appendChild(form);

function checkEmail() { 
  let regMail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let verifierEmail = regMail.test(input.value);
  console.log(input.value)
  if (verifierEmail) {
    alert("Vous avez saisi une adresse électronique valide !");
  } else {
    alert("Vous avez saisi une adresse électronique non valide !");
  }
}
btn.addEventListener("click", checkEmail);
