document.getElementById("MLbtn").addEventListener("click", fill);

// process
function fill() {
  let wrd1 = document.getElementById("plnoun").value;
  let wrd2 = document.getElementById("adj").value;
  let wrd3 = document.getElementById("vrb").value;
  let wrd4 = document.getElementById("noun").value;
  //output
  let madlib = `There are too many ${wrd1} on this ${wrd2} airplane!", I scream. "Somebody has to ${wrd3} on the ${wrd4} to solve this problem!`;

  console.log(madlib);
  document.getElementById("result").innerHTML = madlib;
}
