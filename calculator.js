//Create the table

document.write("<table>");
document.write("<caption>Calculation Results</caption>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];

//receive user input for numbers and operator

while (true) {
  let x = prompt("Enter the first number:");
  if (x === null) break;

  let y = prompt("Enter the second number:");
  if (y === null) break;

  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;

//if a number is not inserted, set result as error

  if (isNaN(x) || isNaN(y)) {
    result = "Error: Non-numeric input";
  } 
else {
    x = parseFloat(x);
    y = parseFloat(y);

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = y !== 0 ? x / y : "Error: Division by zero";
        break;
      case "%":
        result = y !== 0 ? x % y : "Error: Modulus by zero";
        break;
      default:
        result = "Error: Invalid operator";
    }
  }

//write the table results

  document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

  if (typeof result === "number" && !isNaN(result)) {
    results.push(result);
  }
}

document.write("</table>");

// Construct the results in the summary table

if (results.length > 0) {

  let min = Math.min(...results);
  let max = Math.max(...results);
  let total = results.reduce((acc, val) => acc + val, 0);
  let avg = total / results.length;

  document.write("<table>");
  document.write("<caption>Summary Statistics</caption>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");

  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} 
else 
{
  document.write("<p style='text-align:center;'>Results are invalid.</p>");
}