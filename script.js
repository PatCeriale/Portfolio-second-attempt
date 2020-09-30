// Creates the abstract show/hide button
let resumeHome = $(`#resumeHome`);
let btnHome = $(`<div class = "btnHome"></div>`);
resumeHome.append(btnHome);
let toggleButton = $(
  `<button id = "resumeBtn">Click here to view my resume</button>`
);
let hideAbstract = true;
let abstractDiv;
toggleButton.on("click", function (event) {
  event.preventDefault();
  // Log resume, and append to document after clicking the "show" button

  if (hideAbstract) {
    toggleButton.text("Hide Resume");
    abstractDiv = $(
      `<img id="resume" src="images/CerialeResume.png" class="img-fluid thumbnail"
      alt="Patrick's resume" style="width:auto;height:auto;">
`
    );
    toggleButton.after(abstractDiv);
    // Removes the abstract if the button is clicked again
  } else {
    console.log("hide!");
    toggleButton.text("Show Resume");
    abstractDiv.remove();
    abstractDiv = undefined;
  }
  hideAbstract = !hideAbstract;
});

btnHome.append(toggleButton);
