function calculateTip() {  
  let billAmount = document.getElementById("billamt").value; 
  let serviceQuality;
  let serviceQualityList = document.querySelectorAll("option");
  for (let i = 0; i < serviceQualityList.length; i++) {
    if (serviceQualityList[i].selected) {
      serviceQuality = serviceQualityList[i].value;
      break;
    }
  }

  let numberOfPeople = document.getElementById("peopleamt").value;
  if (serviceQuality == 0 || billAmount == "") {
    alert("Remplisez les champs service et billAmount");
  }
  if (numberOfPeople == '' || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  }

  let total = (Number(billAmount) * Number(serviceQuality)) / Number(numberOfPeople);
  if (isNaN(total)) {
    alert("Entrer des valeur valides");
  } else {
    total =  total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  }
}

document.getElementById("totalTip").style.display = "none";
let calculate = document.getElementById("calculate");
calculate.addEventListener("click", calculateTip);
