//changing image
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/lucie_duplex_quai.png") {
    myImage.setAttribute("src", "image/ski.webp");
  } else {
    myImage.setAttribute("src", "image/lucie_duplex_quai.png");
  }
});

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome, " + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
