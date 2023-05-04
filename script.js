let btn = document.getElementById("button");

const predictColor = () => {
  var color1 = document.getElementById("color1").value;
  var color2 = document.getElementById("color2").value;
  var result = document.getElementById("result");

  if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
  ) {
    result.innerHTML =
      "The resulting color is <span style='color:purple;'>purple</span>.";
  } else if (
    (color1 === "blue" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "blue")
  ) {
    result.innerHTML =
      "The resulting color is <span style='color:green;'>green</span>.";
  } else if (
    (color1 === "red" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "red")
  ) {
    result.innerHTML =
      "The resulting color is <span style='color:orange;'>orange</span>.";
  } else {
    result.innerHTML = "Invalid combination of primary colors.";
  }
};

btn.addEventListener("click", predictColor);
