function appear() {document.getElementById("bocn").style.animation = "bocn-appear 0.7s forwards";}
function collapse() {document.getElementById("bocn").style.animation = "bocn-collapse 0.7s forwards";}
let a = false;
document.addEventListener('keydown', function (event) {
  if (event.key === "e") {
    if (a==false) {
      appear();
      a=true;
    } else if(a==true) {
      collapse();
      a=false;
    }}
  });
