function calculate(operation) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
  
    fetch(`http://localhost:8080/api/calc/${operation}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ num1, num2 })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "ok") {
          document.getElementById("result").value = data.result;
        } else {
          alert("계산 실패");
        }
      });
  }
  
  function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
  }
  