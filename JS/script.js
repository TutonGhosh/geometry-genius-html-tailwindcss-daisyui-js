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

  triangleBaseInput.value = " ";
  triangleHeightInput.value = " ";
}

// Retangle
function rectangleClick()
{
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleLengthInput = document.getElementById('rectangle-length');

  const width = rectangleWidthInput.value;
  const length = rectangleLengthInput.value;

  const result = width * length;

  const AreaCalculator = document.getElementById('area-calculator');
  const p = document.createElement('p');
  p.classList.add("commonStyle");
  p.innerText = "Rectangle = " + result + " cm²";
  AreaCalculator.appendChild(p);

  rectangleWidthInput.value = " ";
  rectangleLengthInput.value = " ";
}