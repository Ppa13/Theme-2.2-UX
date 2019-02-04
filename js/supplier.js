// Open login pop-up
function openLogin(){
 	document.getElementById("account-pop-up").style.display="block";
}

// Open logout pop-up
function openLogout(){
	document.getElementById("logout-pop-up").style.display="block";
}

// Close login pop-up
function closeLogin(){
  	document.getElementById("account-pop-up").style.display="none";
}

// Close logout pop-up
function closeLogout(){
	document.getElementById("logout-pop-up").style.display="none";
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




