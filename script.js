 function checkCode() {
      const inputCode = document.getElementById('codeInput').value;
      const correctCode = "152811";
      const errorMsg = document.getElementById("errorMsg");

      if (inputCode === correctCode) {
        document.getElementById("serviceSection").style.display = "block";
        document.getElementById("productSection").style.display = "block";
        document.getElementById("othersSection").style.display = "block";
        document.getElementById("serviceTable").style.display = "table";
        document.getElementById("productTable").style.display = "table";
        document.getElementById("othersTable").style.display = "table";
        errorMsg.textContent = "";
      } else {
        errorMsg.textContent = "Invalid code. Please try again.";
      }
    }