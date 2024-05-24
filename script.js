/* Navigation dropdown */
$("#menuIcon").click(function(){
  $(".navDropdown").toggleClass("active");
});

/* Log form values to the console */
const form = document.getElementById("quoteForm");
const submitter = document.getElementById("submitBtn");
const formData = new FormData(form, submitter);

function logData() {
  console.log(formData);
}

submitBtn.addEventListener('click', logData);