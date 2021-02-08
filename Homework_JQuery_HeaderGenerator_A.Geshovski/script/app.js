$(document).ready(function () {
  $("#generateBtn").on("click", function (event) {
    event.preventDefault();
    console.log(`here`);
    let textInput = $("#textInput").val();
    let colorInput = $("#colorInput").val();

    if (textInput == "" || colorInput == "") {
      alert(`ERROR! Your color name and color input is required to continue!`);
    } else if (textInput !== "" || colorInput !== "") {
      $("#colorHeader")
        .html(`<h1>${textInput}</h1>`)
        .css("color", `${colorInput}`);
      console.log(colorInput);
      $("#colorHeader").css("text-align", "center");
      $("#colorHeader").css("word-wrap", "break-word");
    }
  });
});
