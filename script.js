var copyButtons = document.querySelectorAll(".copy_button");

copyButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var currentUrl = window.location.href;

    var tempInput = document.createElement("input");

    tempInput.setAttribute("value", currentUrl);

    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    button.classList.add("is-copied");

    setTimeout(function() {
      button.classList.remove("is-copied");
    }, 1000);
  });
});