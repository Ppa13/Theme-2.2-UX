// Open account form
function openAccount(){
  var x = document.getElementById("account-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Close account form
function closeAccount(){
  	document.getElementById("account-form").style.display="none";
}

// Open login form
function openLogin(){
	document.getElementById("login-form").style.display="block";
}

// Close login form
function closeLogin(){
	document.getElementById("login-form").style.display="none";
}

// Open signup form
function openSignup(){
	document.getElementById("signup-form").style.display="block";
}

// Close signup form
function closeSignup(){
	document.getElementById("signup-form").style.display="none";
}

// When the user scrolls down make button appear
function scrollFunction(){
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




