var numberOfDrumButtons = document.querySelectorAll(".drum").length; // For getting number of buttons with drum class.

for (i = 0; i < numberOfDrumButtons; i++) {
  // For loop so that  the code can be repeated for each drum button.

  document
    .querySelectorAll(".drum")
    [i].addEventListener(
      "click",
      function () // function that does  something when the button is clicked.
      // We are using anonymous function here.
      {
        alert("I got clicked!");
      }
    );
}
