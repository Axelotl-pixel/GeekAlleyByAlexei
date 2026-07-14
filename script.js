const PI = Math.PI;

// Rectangle
function rectangleArea() {
  let l = parseFloat(document.getElementById("rectLength").value);
  let w = parseFloat(document.getElementById("rectWidth").value);
  if (isNaN(l) || isNaN(w)) {
    document.getElementById("rectangleAreaResult").innerHTML = "Answer: Please enter valid numbers.";
    return;
  }
  document.getElementById("rectangleAreaResult").innerHTML = "Answer: " + (l * w).toFixed(2);
}

// Square
function squareArea() {
  let side = parseFloat(document.getElementById("squareSide").value);
  if (isNaN(side)) {
    document.getElementById("squareAreaResult").innerHTML = "Answer: Please enter a valid number.";
    return;
  }
  document.getElementById("squareAreaResult").innerHTML = "Answer: " + (side * side).toFixed(2);
}

// Triangle
function triangleArea() {
  let base = parseFloat(document.getElementById("triangleBase").value);
  let height = parseFloat(document.getElementById("triangleHeight").value);
  if (isNaN(base) || isNaN(height)) {
    document.getElementById("triangleAreaResult").innerHTML = "Answer: Please enter valid numbers.";
    return;
  }
  document.getElementById("triangleAreaResult").innerHTML = "Answer: " + ((base * height) / 2).toFixed(2);
}

// Circle
function circleArea() {
  let radius = parseFloat(document.getElementById("circleRadiusArea").value);
  if (isNaN(radius)) {
    document.getElementById("circleAreaResult").innerHTML = "Answer: Please enter a valid number.";
    return;
  }
  document.getElementById("circleAreaResult").innerHTML = "Answer: " + (PI * radius * radius).toFixed(2);
}

// Parallelogram
function parallelogramArea() {
  let base = parseFloat(document.getElementById("paraBase").value);
  let height = parseFloat(document.getElementById("paraHeight").value);
  if (isNaN(base) || isNaN(height)) {
    document.getElementById("parallelogramAreaResult").innerHTML = "Answer: Please enter valid numbers.";
    return;
  }
  document.getElementById("parallelogramAreaResult").innerHTML = "Answer: " + (base * height).toFixed(2);
}

// Trapezoid
function trapezoidArea() {
  let a = parseFloat(document.getElementById("trapBase1").value);
  let b = parseFloat(document.getElementById("trapBase2").value);
  let h = parseFloat(document.getElementById("trapHeight").value);
  if (isNaN(a) || isNaN(b) || isNaN(h)) {
    document.getElementById("trapezoidAreaResult").innerHTML = "Answer: Please enter valid numbers.";
    return;
  }
  let area = ((a + b) * h) / 2;
  document.getElementById("trapezoidAreaResult").innerHTML = "Answer: " + area.toFixed(2);
}
