const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextBox = document.querySelector(".entry-textbox");
const addEntry = document.getElementById("addEntry");
const showAll = document.getElementById("showAll");
const delAll = document.getElementById("delAll");
const entriesText = document.getElementById("entries-text");
let count = 1;

function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement("div");
  const displayEntryButton = document.createElement("button");
  const pElement = document.createElement("p");

  entryDiv.className = "entries-nav";
  entriesSection.appendChild(entryDiv);

  displayEntryButton.className = "display-entry-button";
  displayEntryButton.innerText = count;
  entryDiv.appendChild(displayEntryButton);
  displayEntryButton.style.display = "block";

  pElement.className = "single-entry";
  pElement.innerText = entryTextBox.value;
  pElement.style.display = "none";
  entryDiv.appendChild(pElement);
  entryTextBox.value = "";

  displayEntryButton.addEventListener("click", function () {
    const allEntries = document.querySelectorAll(".single-entry");
    for (let i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = "none";
    }
    pElement.style.display = "block";
  });

  showAll.addEventListener("click", function (event) {
    event.preventDefault();
    const allEntries = document.querySelectorAll(".single-entry");
    for (let i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = "block";
    }
  });

  delAll.addEventListener("click", function (event) {
    event.preventDefault();
    entryDiv.remove();
  });

  count++;
}

entryForm.addEventListener("submit", addEntryToDom);
