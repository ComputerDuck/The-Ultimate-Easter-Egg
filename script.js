/*
        -- Code by CumputerDuck on GitHub --
*/

let a = false;
function appear() {
        document.getElementById("bocn").style.animation = "bocn-appear 0.7s forwards";
        a=true;
}
function collapse() {
        document.getElementById("bocn").style.animation = "bocn-collapse 0.7s forwards";
        a=false;
}
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
