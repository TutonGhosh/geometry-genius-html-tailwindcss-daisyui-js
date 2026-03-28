// Triangle
function triangleClick()
{
  const base = commonFunctionForGetValue('triangle-base');
  const height = commonFunctionForGetValue('triangle-height');
  let result = 0.5 * base * height; 
  result = parseFloat(result.toFixed(2));
  appendFunction('area-calculator', 'Triangle', result);
  // document.getElementById('triangle-base').value = " ";
  // document.getElementById('triangle-height').value = " ";
}
// Rectangle
function rectangleClick()
{
  const width = commonFunctionForGetValue('rectangle-width');
  const length = commonFunctionForGetValue('rectangle-length');
  let result = width * length;
  result = parseFloat(result.toFixed(2));
  appendFunction('area-calculator', 'Rectangle', result);
  // document.getElementById('rectangle-width').value = " ";
  // document.getElementById('rectangle-length').value = " ";
}
// Parallelogram
function parallelogramClick()
{
  const base = commonFunctionForGetValue('parallelogram-base');
  const height = commonFunctionForGetValue('parallelogram-height');
  let result = base * height;
  result = parseFloat(result.toFixed(2));
  appendFunction('area-calculator', 'Parallelogram', result);
  // document.getElementById('parallelogram-base').value = " ";
  // document.getElementById('parallelogram-height').value = " ";
}
// Rhombus
function rhombusClick()
{
  const diagonal1 = commonFunctionForGetValue('rhombus-diagonal-1');
  const diagonal2 = commonFunctionForGetValue('rhombus-diagonal-2');
  let result = 0.5 * diagonal1 * diagonal2;
  result = parseFloat(result.toFixed(2));
  appendFunction('area-calculator', 'Rhombus', result);
  // document.getElementById('parallelogram-base').value = " ";
  // document.getElementById('parallelogram-height').value = " ";
}
// Pentagon
function pentagonClick()
{
  const perimeter = commonFunctionForGetValue('pentagon-perimeter');
  const apothem = commonFunctionForGetValue('pentagon-apothem');
  let result = 0.5 * perimeter * apothem;
  result = parseFloat(result.toFixed(2));
  appendFunction('area-calculator', 'Penatgon', result);
  // document.getElementById('parallelogram-base').value = " ";
  // document.getElementById('parallelogram-height').value = " ";
}
// Ellipse
function ellipseClick()
{
  const aAxis = commonFunctionForGetValue('ellipse-a-axis');
  const bAxis = commonFunctionForGetValue('ellipse-b-axis');
  let result = 3.14159 * aAxis * bAxis;
  result = parseFloat(result.toFixed(2));
  appendFunction('area-calculator', 'Ellipse', result);
  // document.getElementById('parallelogram-base').value = " ";
  // document.getElementById('parallelogram-height').value = " ";
}


// Repetitive Task Function
function commonFunctionForGetValue(inputID)
{
  const inputText = document.getElementById(inputID);
  const inputValue = parseFloat(inputText.value);
  return inputValue;
}
function appendFunction(areaID, name, result)
{
  const AreaCalculator = document.getElementById(areaID);
  const p = document.createElement("p");
  p.classList.add("commonStyle");
  p.innerText = name + " = " + result + " cm²";
  AreaCalculator.appendChild(p);
}