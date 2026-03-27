// Triangle
function triangleClick() 
{
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleHeightInput = document.getElementById("triangle-height");

  const base = parseFloat(triangleBaseInput.value);
  const height = parseFloat(triangleHeightInput.value);

  const result = 0.5 * base * height;
  
  const AreaCalculator = document.getElementById("area-calculator");
  const p = document.createElement("p");
  p.classList.add("commonStyle");
  p.innerText = "Triangle = " + result + " cm²";
  AreaCalculator.appendChild(p);

  triangleBaseInput.value = "";
  triangleHeightInput.value = "";
}