// Import stylesheets
// import './style.css';
let optionsButtons = document.querySelectorAll('.option-button');
let labelName = document.getElementById('labelName');
let writingArea = document.getElementById('text-input');

let advancedOptionButton = document.querySelectorAll(".adv-option-button");


let labelList = ['B', 'I', 'L', 'O', 'U'];

const initializer = () => {

  labelList.map((value) => {
    let option = document.createElement('option');
    option.value = value;
    option.innerHTML = value;
    labelName.appendChild(option);
  });


};
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;
        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};










window.onload = initializer();
