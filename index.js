// Import stylesheets
// import './style.css';
let optionsButtons = document.querySelectorAll('.option-button');
let labelName = document.getElementById('labelName');
let writingArea = document.getElementById('text-input');
let doButtons = document.querySelectorAll('.option-button-do');

let advancedOptionButton = document.querySelectorAll(".adv-option-button");

let selectArea = document.querySelectorAll(".selectableTextArea");

// let labelList = ['B', 'I', 'L', 'O', 'U'];

const initializer = () => {

  highlighter(optionsButtons, false);
  highlighter(doButtons, false);


  // labelList.map((value) => {
  //   let option = document.createElement('option');
  //   option.value = value;
  //   option.innerHTML = value;
  //   labelName.appendChild(option);
  // });


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

let selText = "";
document.querySelector("textarea").addEventListener("mouseup", (evt)=>{
  const el = evt.currentTarget;
  selText = el.value.substr(el.selectionStart, el.selectionEnd - el.selectionStart);
  // console.log(selText);
  if(selText !=""){
    if(result == 0){
        // console.log(selText, result);
        // el.classList.add("highlight");

    }
  }
 
});






// try
// function disp() {
//   var text = document.querySelectorAll(".selectableTextArea");
//   var t = text.value.substr(text.selectionStart, text.selectionEnd - text.selectionStart);
//   alert(t);
// }

// try
// function getSelectedText() {
//   var selectedText = '';

//   // window.getSelection
//   if (window.getSelection) {
//       selectedText = window.getSelection();
//   }
//   // document.getSelection
//   else if (document.getSelection) {
//       selectedText = document.getSelection();
//   }
//   // document.selection
//   else if (document.selection) {
//       selectedText = 
//       document.selection.createRange().text;
//   } else return;
//   // To write the selected text into the textarea
//   document.testform.selectedtext.value = selectedText;
// }



doButtons.forEach((button) => {
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

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("click", () => {

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




let selection = document.querySelector("select");
let result = 0;

labelName.addEventListener("change", () =>{
  result = selection.options[selection.selectedIndex].index;
  


});



window.onload = initializer();
