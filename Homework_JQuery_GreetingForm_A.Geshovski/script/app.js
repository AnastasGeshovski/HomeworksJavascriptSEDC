$(document).ready(function () {
  $("#GreetingBtn").on("click", function () {
    console.log(`here`);
    let inputName = $("#textInput").val();
    if (inputName == "") {
      alert(`ERROR! Your name is required to continue!`);
    } else if (inputName !== "") {
      alert(
        `Without you ${inputName}, we wouldn't be here. Thank you for your business.`
      );
    }
  });
});
    