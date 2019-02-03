// Form buttons
function openForm() {
 	document.getElementById("account-pop-up").style.display="block";
}

function closeForm() {
  	document.getElementById("account-pop-up").style.display = "none";
}

function searchFunction(){

  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search-input-field');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

