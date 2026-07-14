/*=================================
    GEEKALLEY
    SCRIPT.JS
=================================*/

const PI = Math.PI;

/*=================================
    BASIC CALCULATOR
=================================*/

// Addition
function addition() {
    let a = parseFloat(document.getElementById("add1").value);
    let b = parseFloat(document.getElementById("add2").value);

    document.getElementById("addResult").innerHTML =
        "Answer: " + (a + b);
}

// Subtraction
function subtraction() {
    let a = parseFloat(document.getElementById("sub1").value);
    let b = parseFloat(document.getElementById("sub2").value);

    document.getElementById("subResult").innerHTML =
        "Answer: " + (a - b);
}

// Multiplication
function multiplication() {
    let a = parseFloat(document.getElementById("mul1").value);
    let b = parseFloat(document.getElementById("mul2").value);

    document.getElementById("mulResult").innerHTML =
        "Answer: " + (a * b);
}

// Division
function division() {

    let a = parseFloat(document.getElementById("div1").value);
    let b = parseFloat(document.getElementById("div2").value);

    if (b === 0) {
        document.getElementById("divResult").innerHTML =
            "Answer: Cannot divide by zero";
        return;
    }

    document.getElementById("divResult").innerHTML =
        "Answer: " + (a / b);

}

// Percentage
function percentage() {

    let part = parseFloat(document.getElementById("per1").value);
    let whole = parseFloat(document.getElementById("per2").value);

    document.getElementById("perResult").innerHTML =
        "Answer: " + ((part / whole) * 100).toFixed(2) + "%";

}

// Square Root
function squareRoot() {

    let n = parseFloat(document.getElementById("sqrtNum").value);

    document.getElementById("sqrtResult").innerHTML =
        "Answer: " + Math.sqrt(n).toFixed(4);

}

// Exponent
function exponent() {

    let base = parseFloat(document.getElementById("base").value);
    let power = parseFloat(document.getElementById("power").value);

    document.getElementById("expResult").innerHTML =
        "Answer: " + Math.pow(base, power);

}

// Parentheses Expression
function expressionCalc() {

    let expression =
        document.getElementById("expression").value;

    try {

        let answer = eval(expression);

        document.getElementById("expressionResult").innerHTML =
            "Answer: " + answer;

    }

    catch {

        document.getElementById("expressionResult").innerHTML =
            "Invalid Expression";

    }

}

/*=================================
    DIAMETER PAGE
=================================*/

// Diameter from Radius
function diameterFromRadius() {

    let r = parseFloat(
        document.getElementById("radiusDiameter").value
    );

    document.getElementById("diameterRadiusResult").innerHTML =
        "Answer: " + (2 * r).toFixed(2);

}

// Radius from Diameter
function radiusFromDiameter() {

    let d = parseFloat(
        document.getElementById("diameterRadius").value
    );

    document.getElementById("radiusResult").innerHTML =
        "Answer: " + (d / 2).toFixed(2);

}

// Circumference from Diameter
function circumferenceFromDiameter() {

    let d = parseFloat(
        document.getElementById("circleDiameter").value
    );

    document.getElementById("circumferenceResult").innerHTML =
        "Answer: " + (PI * d).toFixed(2);

}

// Diameter from Circumference
function diameterFromCircumference() {

    let c = parseFloat(
        document.getElementById("circleCircumference").value
    );

    document.getElementById("diameterCircResult").innerHTML =
        "Answer: " + (c / PI).toFixed(2);

}

// Diameter from Area
function diameterFromArea() {

    let area = parseFloat(
        document.getElementById("circleArea").value
    );

    let diameter = 2 * Math.sqrt(area / PI);

    document.getElementById("diameterAreaResult").innerHTML =
        "Answer: " + diameter.toFixed(2);

}

// Area from Diameter
function areaFromDiameter() {

    let d = parseFloat(
        document.getElementById("diameterArea").value
    );

    let radius = d / 2;

    let area = PI * radius * radius;

    document.getElementById("areaDiameterResult").innerHTML =
        "Answer: " + area.toFixed(2);

}

/*=================================
    AREA PAGE
=================================*/

// Rectangle
function rectangleArea() {

    let l = parseFloat(
        document.getElementById("rectLength").value
    );

    let w = parseFloat(
        document.getElementById("rectWidth").value
    );

    document.getElementById("rectangleAreaResult").innerHTML =
        "Answer: " + (l * w).toFixed(2);

}

// Square
function squareArea() {

    let side = parseFloat(
        document.getElementById("squareSide").value
    );

    document.getElementById("squareAreaResult").innerHTML =
        "Answer: " + (side * side).toFixed(2);

}

// Triangle
function triangleArea() {

    let base = parseFloat(
        document.getElementById("triangleBase").value
    );

    let height = parseFloat(
        document.getElementById("triangleHeight").value
    );

    document.getElementById("triangleAreaResult").innerHTML =
        "Answer: " + ((base * height) / 2).toFixed(2);

}

// Circle
function circleArea() {

    let radius = parseFloat(
        document.getElementById("circleRadiusArea").value
    );

    document.getElementById("circleAreaResult").innerHTML =
        "Answer: " + (PI * radius * radius).toFixed(2);

}

// Parallelogram
function parallelogramArea() {

    let base = parseFloat(
        document.getElementById("paraBase").value
    );

    let height = parseFloat(
        document.getElementById("paraHeight").value
    );

    document.getElementById("parallelogramAreaResult").innerHTML =
        "Answer: " + (base * height).toFixed(2);

}

// Trapezoid
function trapezoidArea() {

    let a = parseFloat(
        document.getElementById("trapBase1").value
    );

    let b = parseFloat(
        document.getElementById("trapBase2").value
    );

    let h = parseFloat(
        document.getElementById("trapHeight").value
    );

    let area = ((a + b) * h) / 2;

    document.getElementById("trapezoidAreaResult").innerHTML =
        "Answer: " + area.toFixed(2);

}
/*=================================
    VOLUME PAGE
=================================*/

// Cube
function cubeVolume() {

    let side = parseFloat(
        document.getElementById("cubeSide").value
    );

    let volume = Math.pow(side, 3);

    document.getElementById("cubeVolumeResult").innerHTML =
        "Answer: " + volume.toFixed(2);

}

// Cylinder
function cylinderVolume() {

    let radius = parseFloat(
        document.getElementById("cylinderRadius").value
    );

    let height = parseFloat(
        document.getElementById("cylinderHeight").value
    );

    let volume = PI * radius * radius * height;

    document.getElementById("cylinderVolumeResult").innerHTML =
        "Answer: " + volume.toFixed(2);

}

// Cone
function coneVolume() {

    let radius = parseFloat(
        document.getElementById("coneRadius").value
    );

    let height = parseFloat(
        document.getElementById("coneHeight").value
    );

    let volume = (PI * radius * radius * height) / 3;

    document.getElementById("coneVolumeResult").innerHTML =
        "Answer: " + volume.toFixed(2);

}

// Sphere
function sphereVolume() {

    let radius = parseFloat(
        document.getElementById("sphereRadius").value
    );

    let volume = (4 / 3) * PI * Math.pow(radius, 3);

    document.getElementById("sphereVolumeResult").innerHTML =
        "Answer: " + volume.toFixed(2);

}

// Rectangular Prism
function prismVolume() {

    let length = parseFloat(
        document.getElementById("prismLength").value
    );

    let width = parseFloat(
        document.getElementById("prismWidth").value
    );

    let height = parseFloat(
        document.getElementById("prismHeight").value
    );

    let volume = length * width * height;

    document.getElementById("prismVolumeResult").innerHTML =
        "Answer: " + volume.toFixed(2);

}

/*=================================
    PERIMETER PAGE
=================================*/

// Rectangle
function rectanglePerimeter() {

    let length = parseFloat(
        document.getElementById("perRectLength").value
    );

    let width = parseFloat(
        document.getElementById("perRectWidth").value
    );

    let perimeter = 2 * (length + width);

    document.getElementById("rectanglePerimeterResult").innerHTML =
        "Answer: " + perimeter.toFixed(2);

}

// Square
function squarePerimeter() {

    let side = parseFloat(
        document.getElementById("perSquareSide").value
    );

    let perimeter = 4 * side;

    document.getElementById("squarePerimeterResult").innerHTML =
        "Answer: " + perimeter.toFixed(2);

}

// Triangle
function trianglePerimeter() {

    let a = parseFloat(
        document.getElementById("triSide1").value
    );

    let b = parseFloat(
        document.getElementById("triSide2").value
    );

    let c = parseFloat(
        document.getElementById("triSide3").value
    );

    let perimeter = a + b + c;

    document.getElementById("trianglePerimeterResult").innerHTML =
        "Answer: " + perimeter.toFixed(2);

}

// Circle (Circumference)
function circleCircumference() {

    let radius = parseFloat(
        document.getElementById("circleRadiusPerimeter").value
    );

    let circumference = 2 * PI * radius;

    document.getElementById("circlePerimeterResult").innerHTML =
        "Answer: " + circumference.toFixed(2);

}

// Parallelogram
function parallelogramPerimeter() {

    let sideA = parseFloat(
        document.getElementById("paraSideA").value
    );

    let sideB = parseFloat(
        document.getElementById("paraSideB").value
    );

    let perimeter = 2 * (sideA + sideB);

    document.getElementById("parallelogramPerimeterResult").innerHTML =
        "Answer: " + perimeter.toFixed(2);

}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });
}


/*=================================
    END OF SCRIPT.JS
=================================*/
