// Append value to the display
function append(value) {
    document.getElementById("display").value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Calculate square of the number
  function square() {
    let current = document.getElementById("display").value;
    if (!isNaN(current)) {
      document.getElementById("display").value = Math.pow(Number(current), 2);
    }
  }
  
  // Evaluate the expression
  function calculate() {
    try {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
  