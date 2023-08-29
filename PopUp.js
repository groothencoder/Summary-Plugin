let pointsummary = document.getElementById('pointsummary');


let fullsummary = document.getElementById('fullsummary');


// fullsummary.addEventListener("click", async() => {
//     //get the current active tab
//  let [tab] = await chrome.tabs.query({
//     active:true,
//      currentWindow:true
//   }); 
// })

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its id
    var openNewPageButton = document.getElementById("pointsummary");
  
    // Add a click event listener to the button
    openNewPageButton.addEventListener("click", function() {
      // Open the new HTML page in a new tab
      window.open("point.html", "_blank");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its id
    var openNewPageButton = document.getElementById("fullsummary");
  
    // Add a click event listener to the button
    openNewPageButton.addEventListener("click", function() {
      // Open the new HTML page in a new tab
      window.open("summarywise.html", "_blank");
    });
  });
// pointsummary.addEventListener("click",() => {
//     alert('point wise summary will appear here')
// })