function toggleForm() {
    const x = document.getElementById("login");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    
    const y = document.getElementById("sign-up");

      if (x.style.display == "block") {
          y.style.display = "none";
      } else {
          y.style.display = "none";
      }
  } 
  
function toggleSignUp() {
    const y = document.getElementById("sign-up");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    
    const x = document.getElementById("login");

      if (y.style.display == "block") {
          x.style.display = "none";
      } else {
           x.style.display = "none";
      }
                
  }
  